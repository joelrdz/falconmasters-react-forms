import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Label, InputGroup, Input, FeedbackError, IconValidation } from '../elements/Forms';

export default function InputComponent({ type, name, state, setState, label, placeholder, feedbackError, expression }) {
  const onChangeHandler = (e) => {
    setState({...state, field: e.target.value});
  }

  const validationHandler = () => {
    if(expression) {
      if(expression.test(state.field)) {
        setState({...state, valid: 'true'});
      } else {
        setState({...state, valid: 'false'});
      }
    }
  }

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>{label}</Label>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.field}
          onChange={onChangeHandler}
          onKeyUp={validationHandler}
          onBlur={validationHandler}
          valid={state.valid}
        />
        <IconValidation valid={state.valid}>
          {state.valid === 'true'
            ? <FaCheckCircle />
            : <FaTimesCircle />
          }
        </IconValidation>
        <IconValidation><FaCheckCircle /></IconValidation>
      </InputGroup>
      <FeedbackError valid={state.valid}>{feedbackError}</FeedbackError>
    </div>
  );
}