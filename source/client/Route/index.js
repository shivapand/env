import React, { useEffect, useState } from 'react';
import { Steps, Step } from 'react-step-builder';

const stepClassName = 'd-flex flex-column align-items-center mb-3';

const Step1 = () => {
  return (
    <div className={stepClassName}>
      <h1>First Step</h1>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className={stepClassName}>
      <h1>Mid Step </h1>
    </div>
  );
};

const FinalStep = (props) => {
  return (
    <div className={stepClassName}>
      <h1>Last Step</h1>

      <button className='btn btn-link' onClick={props.onStepAddHandle}>
        Add Step
      </button>
    </div>
  );
};

const AddedStep = () => {
  return (
    <div className={stepClassName}>
      <h1>Added Step</h1>
    </div>
  );
};

const Navigation = (props) => {
  return (
    <div className='d-flex btn-group align-self-end'>
      {props.current > 1 && (
        <button className='w-50 btn btn-dark' onClick={props.prev}>
          Previous
        </button>
      )}

      {props.current < props.size && (
        <button className='w-50 btn btn-dark' onClick={props.next}>
          Next
        </button>
      )}
    </div>
  );
};

const config = {
  navigation: {
    component: Navigation,
    location: 'after'
  }
};

const Route = () => {
  const [stepAddFlag, setStepAddFlag] = useState(false);

  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='w-25 h-25 p-5 rounded border border-dark border-1'>
        <Steps config={config} className='Steps'>
          <Step component={Step1} />

          <Step component={Step2} />

          <Step
            component={FinalStep}
            onStepAddHandle={() => {
              setStepAddFlag(true);
            }}
          />
          {stepAddFlag && <Step component={AddedStep} />}
        </Steps>
      </div>
    </div>
  );
};

export default Route;
