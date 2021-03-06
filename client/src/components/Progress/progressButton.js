import React from 'react';
import { Button } from 'react-bootstrap';

export default function LanguageButton(props) {

  return (
    <Button className={ props.disabled ? "messageBox":' '} 
      variant={props.variant ? "success" : "danger"}
      disabled={props.disabled}
      name={props.language}
      value={props.value}
      onClick={() => props.setLanguageClicked(props.language)}
      // style={{margin: "10px"}}
    >
      {props.language}

    </Button>
  )
}
