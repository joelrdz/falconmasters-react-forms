import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Label, InputGroup, Input, FeedbackError, IconValidation } from '../elements/Forms';

export default function InputComponent({ type, name, state, setState, label, placeholder, feedbackError, validation, validatePasswords }) {
  const inputChangeHandler = (e) => {
    setState({...state, field: e.target.value});
  }

  const validationHandler = () => {
    if (validation) {
      if (validation.test(state.field)) {
        setState({...state, valid: 'true'});
      } else {
        setState({...state, valid: 'false'});
      }
    }

    if (validatePasswords) {
      validatePasswords();
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
          onChange={inputChangeHandler}
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
      </InputGroup>
      <FeedbackError valid={state.valid}>{feedbackError}</FeedbackError>
    </div>
  );
}