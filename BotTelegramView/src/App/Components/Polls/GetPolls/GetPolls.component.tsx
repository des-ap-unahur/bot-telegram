import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import PollInterface from '../../../Interfaces/Poll.interface';
import { inputNames } from './GetPolls.config';
import GetPollsContent from './GetPolls.content';
import { GetPollProps, OptionInterface, QuestionInterface } from './GetPolls.interface';
import { createArrayIterator, buildQuestions } from './GetPolls.utils';


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
  const [ postAction, setPostAction ] = useState<boolean>(false);
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
    postQuestionsRequest
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
    const emptyQuestions = questions.some(
      question => question.question === ''
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
      () => buildQuestions('', '', '')
    )
    setQuestions(buildQuestion);
  }, [numberOfQuestions]);

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
    setPostAction(false);
    getPolls();
  }

  const postQuestions = useCallback(()=>{
    if(postAction && pollSelected){
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
  },[postAction, pollSelected, questions.length, postQuestionsRequest])

  useEffect(()=>{
    postQuestions();
  }, [postQuestions])

  useEffect(()=>{
    getUserTypes();
    generateQuestions();
  },[getUserTypes, generateQuestions])

  useEffect(()=>{
    getPolls()
  }, [getPolls])

  const handleChangeInputQuestions = (e: any, questionIndex: number)=> {
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

  const handleOpenPollPopUp = (poll?: PollInterface) => {
    if(poll){
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

      await updatePollRequest(requestOptions)
    } else if(!emptyFields){
      const requestOptions = {
        data
      }

      await postPollRequest(requestOptions);
      await setPostAction(true);
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