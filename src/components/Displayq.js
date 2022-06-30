import React, { useState } from "react";
import { Form, FormGroup, Label, Input , Spinner, Alert} from "reactstrap";
function Displayq(props) {
  const { index, problem, active, userChoice, setUserChoice } = props;
  if(!problem){
     return <Spinner
    color="danger"
  >
  </Spinner>
  }
  const { question , correct, choices, image, desc } = problem;
  return (
    <>
      {
          image==="None"?""
          :
          <div className="row">
        <div className="col-12 text-center">
          <img src={image}/>
        </div>
      </div>
      }
      <div className="row">
        <div className="col-12 text-center">
          <h5>{(index+1) + ". " + question}</h5>
        </div>
      </div>
      {choices.map((option, i) => (
        <Form key={i.toString()}>
          <FormGroup check>
            <Label check>
              <Input name={"radio1" + i} type="radio" checked={userChoice===(i+1)} onChange={()=>{
                setUserChoice(index,i+1);
              }} />
              {option}
            </Label>
          </FormGroup>
        </Form>
      ))}
      {
        !active
        ?
        <Alert color="info">
         <b>Correct answer: </b>({correct})
         <br></br>
         <b>Description: </b>({desc})
        </Alert>:""
      }
    </>
  );
}

export default Displayq;
