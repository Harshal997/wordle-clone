import React, {useContext} from 'react'
import { AppContext } from '../App';


function Key(props) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

    const selectLetter = () => {
        if(props.keyVal === "Enter") {
            onEnter();
        } else if(props.keyVal === "Delete") {
            onDelete();
        } else {
        onSelectLetter(props.keyVal);
    }
}
  let setId;
  if(props.bigKey) setId = "big";
  else if(props.disabled) setId = "disabled";
  else if(props.correct) setId = "correct";
  else if(props.almost) setId = "almost";


  return (
    <div className='key' id = {setId} onClick={selectLetter}
    >{props.keyVal}</div>
  )
}

export default Key
