import React from 'react';
import RightModal from '../../../SharedComponents/RightModalComponents/RightModal.component';
import { useStyles } from '../GetCommands.style';
import { NewCommandProps } from '../GetCommands.interface';
import BuildInputs from '../../../SharedComponents/BuildInputs/BuildInputs.component';


const NewCommand = (props:NewCommandProps) => {
  const {
    openNewCommand,
    handleCloseNewCommand,
    language
  } = props;

  const { contentSize } = useStyles();
  const select = {
    type: 'select',
    name: 'select',
    title: 'algo',
    handleChange: (e:any) => {console.log(e)},
    value: 'algo',
    list: [],
    emptyFields: false
  }
  const input = {
    type: 'text',
    name: 'input',
    title: 'algo',
    handleChange: (e:any) => {console.log(e)},
    value: 'algo',
    emptyFields: false
  }

  const name = {
    type: 'text',
    name: 'input',
    title: 'algo',
    handleChange: (e:any) => {console.log(e)},
    value: 'algo',
    emptyFields: false
  }
  return (
    <RightModal
      open={openNewCommand}
      handleClose={handleCloseNewCommand}
      title={language.newCommand}
      handleSave={()=>{}}
      fetching={false}
    >
      <div className={contentSize}>
        <BuildInputs input={input}/>
        <BuildInputs input={input}/>
        <BuildInputs input={input}/>
        <BuildInputs input={input}/>
        <BuildInputs input={select}/>
        <BuildInputs input={select}/>
        <BuildInputs input={select}/>
        <BuildInputs input={select}/>
        <BuildInputs input={select}/>
      </div>
    </RightModal>
  );
}

export default NewCommand;