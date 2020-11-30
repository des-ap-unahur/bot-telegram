import React, { useState, useCallback, useLayoutEffect } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const ControlledTooltips = ({children, title, click, setClick}) => {
  const [open, setOpen] = useState(false);
  
  const closeTooltip = useCallback(()=> {
    if(click){
      setOpen(false)
      setClick(false)
    }
  }, [click])

  useLayoutEffect(()=>{
    closeTooltip()
  }, [closeTooltip])

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      disableFocusListener 
      disableTouchListener
      open={open} 
      onClose={handleClose} 
      onOpen={handleOpen} 
      title={title} 
      arrow
    >
      {children}
    </Tooltip>
  );
}

export default ControlledTooltips