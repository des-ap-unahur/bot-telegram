import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import PollInterface from '../../../Interfaces/Poll.interface';
import { inputNames } from './GetPolls.config';
import GetPollsContent from './GetPolls.content';
import { GetPollProps, OptionInterface } from './GetPolls.interface';
import { createArrayIterator, buildQuestions } from './GetPolls.utils';
import QuestionInterface from "../../../Interfaces/Question.interface";


const GetPolls = (props: GetPollProps) => {
  const [ openDeletePopUp, setOpenDeletePopUp ] = useState<boolean>(false);
  const [ openPollPopUp, setOpenPollPopUp ] = useState<boolean>(false);
  const [ pollId, selectPollId ] = useState<number | null>(null);
  const [ name, setName ] = useState<string>('');
  const [ description, setDescription ] = useState<string>('');
  const [ userTypeId, setUserTypeId ] = useState<number | string>('');
  const [ numberOfQuestions, setNumberOfQuestions ] = useState<number | string>(1);
  const [ confirmation, setConfirmation ] = useState<boolean>(false);
  const [ questions, setQuestions ] = useState<QuestionInterface[]>([]);
  const [ postMode, setPostMode ] = useState<boolean>(false);
  const [ updateMode, setUpdateMode ] = useState<boolean>(false);
  const { language } = useContext(LanguageContext);
  const { 
    polls, 
    total, 
    fetching, 
    getPollsRequest, 
    clearPollStates, 
    deletePollRequest, 
    selectPoll, 
    pollSelected, 
    updatePollRequest, 
    postPollRequest,
    getUserTypesRequest,
    userTypes,
    postQuestionsRequest,
    updateQuestionsRequest
  } = props;

  const userTypesList = useMemo<OptionInterface[] | null>(()=>{
    return userTypes && userTypes.map(
      userType => ({
        id: userType.user_type_id,
        name: userType.description
      })
    )
  },[userTypes])

  const emptyFields = useMemo<boolean>(()=>{
    const emptyQuestions = questions.every(
      question => question.question !== ''
    )

    return !(name && description && userTypeId) || !emptyQuestions
  }, [name, description, userTypeId, questions])

  const getPolls = useCallback(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };
    
    getPollsRequest(requestOptions);
  }, [])

  const generateQuestions = useCallback(()=>{
    const toNumber = Number(numberOfQuestions)
    const arrayIterator = createArrayIterator(toNumber)

    const buildQuestion: QuestionInterface[] = arrayIterator.map(
      (i, index) => questions && questions[index] ? 
        questions[index] 
      :
        buildQuestions('', '', '')
    )
    setQuestions(buildQuestion);
  }, [numberOfQuestions, questions.length]);

  const getUserTypes = useCallback(()=>{
    if(!userTypes){
      getUserTypesRequest({});
    }
  }, [userTypes, getUserTypesRequest])

  const handleClosePollPopUp = () => {
    setNumberOfQuestions('1');
    selectPoll(null);
    setOpenPollPopUp(false);
    setName('');
    setDescription('');
    setUserTypeId('');
    setQuestions([]);
    selectPollId(null);
    setConfirmation(false);
    setPostMode(false);
    setUpdateMode(false);
    getPolls();
  }

  const postQuestions = useCallback(()=>{
    if(postMode && pollSelected){
      const questionsToPost = questions.map(
        (question)=> 
          ({
            poll_id: pollSelected.poll_id, 
            question: question.question, 
            description: question.description 
          })
      )

      const requestOptions = {
        data: questionsToPost
      }
      
      postQuestionsRequest(requestOptions);
      handleClosePollPopUp();
    }
  },[postMode, pollSelected, questions.length, postQuestionsRequest])

  const pollSelectedLoad = useCallback(()=>{

    if(pollSelected && !postMode && !updateMode){
      const questionsToUpdate = pollSelected && pollSelected.questions;
      setName(pollSelected.name);
      setDescription(pollSelected.description);
      setUserTypeId(pollSelected.user_type_id);
      setNumberOfQuestions(String(questionsToUpdate.length));
      setQuestions(questionsToUpdate);
      setUpdateMode(true);
    }
  }, [pollSelected, postMode, updateMode])

  useEffect(()=>{
    postQuestions();
    pollSelectedLoad();
  }, [postQuestions, pollSelectedLoad])

  useEffect(()=>{
    getUserTypes();
    generateQuestions();
  },[getUserTypes, generateQuestions])

  useEffect(()=>{
    getPolls()
  }, [getPolls])

  const updateQuestion = async (index: number, question_id?: number | string) => {
    const requestOptions = {
      param_1: question_id,
      data: questions[index]
    }
    await updateQuestionsRequest(requestOptions);
  }

  const handleChangeInputQuestions = (e: any, questionIndex: number) => {
    const value = e.target.value;

    const questionReplace = questions.map(
      (question, index) => {
        if(index === questionIndex){
          question.question = value;
          return {
            poll_id: question.poll_id,
            question: value,
            description: question.description
          }
        }
        return question;
      }
    )
    
    setQuestions(questionReplace);
  }

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getPollsRequest(requestOptions)
  }

  const handleDeletePoll = async () => {
    const requestOptions = {
      param_1: pollId
    }

    clearPollStates();
    setOpenDeletePopUp(false);
    await deletePollRequest(requestOptions);
    await handleChangePage(0, 10);
  }

  const handleOpenDeletePopUp = (id: number) => {
    selectPollId(id);
    setOpenDeletePopUp(true);
  }

  const handleCloseDeletePopUp = () => {
    setOpenDeletePopUp(false);
  }

  const handleOpenPollPopUp = (poll?: PollInterface | null) => {
    if(poll && poll.questions){
      setOpenPollPopUp(true);
      selectPoll(poll);
    } else {
      setOpenPollPopUp(true);
    }
  }

  const handleSavePoll = async () => {
    const data = {
      user_type_id: userTypeId,
      name: name,
      description: description
    }

    emptyFields ? setConfirmation(true) : setConfirmation(false);

    if(pollSelected && pollSelected.poll_id && !emptyFields){
      const requestOptions = {
        param_1: pollSelected.poll_id,
        data
      }

      await updatePollRequest(requestOptions);
      await pollSelected.questions.map(async (question, index) => await updateQuestion(index, question.poll_question_id));
      await handleClosePollPopUp();
    } else if(!emptyFields){
      const requestOptions = {
        data
      }

      await setPostMode(true);
      await postPollRequest(requestOptions);
    }
  }

  const handleChangeInputs = (e:any)=>{
    const name = e.target.name;
    const value = e.target.value;

    if(name === inputNames.name){
      setName(value);
    } else if (name === inputNames.description){
      setDescription(value);
    } else if (name === inputNames.userType){
      setUserTypeId(value);
    } else if (name === inputNames.numberOfQuestions){
      setNumberOfQuestions(value);
    }
  }

  return (
    <GetPollsContent
      language={language}
      handleChangePage={handleChangePage}
      polls={polls}
      total={total}
      fetching={fetching}
      handleDeletePoll={handleDeletePoll}
      handleOpenDeletePopUp={handleOpenDeletePopUp}
      handleCloseDeletePopUp={handleCloseDeletePopUp}
      handleOpenPollPopUp={handleOpenPollPopUp}
      openDeletePopUp={openDeletePopUp}
      openPollPopUp={openPollPopUp}
      handleClosePollPopUp={handleClosePollPopUp}
      handleSavePoll={handleSavePoll}
      userTypes={userTypes}
      handleChangeInputs={handleChangeInputs}
      name={name}
      description={description}
      userTypeId={userTypeId}
      emptyFields={emptyFields}
      userTypesList={userTypesList}
      numberOfQuestions={numberOfQuestions}
      questions={questions}
      handleChangeInputQuestions={handleChangeInputQuestions}
      confirmation={confirmation}
    />
  )
}

export default GetPolls;