import React, { useState } from 'react';
import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import {
  IconButton
} from '@material-ui/core';
import Tooltip from '../Tooltip/Tooltip.component'
import { useStyles } from './ActionButton.styles';
import { ActionButtonProps, ActionInterface } from './ActionButton.interfaces';

const ActionButton = ({actions, dataset}:ActionButtonProps) => {
  const { iconButton, iconColorRed, iconColorYellow, iconDisabled, actionContainer } = useStyles();
  const [ click, setClick ] = useState<boolean>(false);
  const actionTypes = {
    delete: 'delete',
    view: 'view',
    download: 'download'
  };

  const handleClick = (action:any) => {
    setClick(true)
    action.onClick(dataset)
  }

  return <div className={actionContainer}>
    {
      actions.map((action: ActionInterface, i: number) =>
        <Tooltip
          key={'action-button' + i}
          title={action.title}
          click={click}
          setClick={setClick}
        >
          <IconButton
            key={i}
            className={clsx(iconButton,{
              [iconColorRed]: action.type === actionTypes.delete,
              [iconColorYellow]: action.type === actionTypes.view || action.type === actionTypes.download,
              [iconDisabled]: action.disabled
            })}
            id={action.id}
            disabled={action.disabled}
            onClick={()=> handleClick(action)}
          >
            <ReactSVG src={action.icon}/>
          </IconButton>
        </Tooltip>
      )
    }
  </div>
}

export default ActionButton;