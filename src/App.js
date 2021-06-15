import { Form, Label, InputGroup, Input, FeedbackError, IconValidation, TermsContainer, CenteredButtonContainer, Button, MessageSuccess, MessageError } from './elements/Forms';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function App() {
  return (
    <main>
      <Form action="">
        <div>
          <Label htmlFor="name">Usuario</Label>
          <InputGroup>
            <Input type="text" placeholder="usuario" id="name" />
            <IconValidation><FaCheckCircle /><FaTimesCircle /></IconValidation>
          </InputGroup>
          <FeedbackError>Lorem ipsum</FeedbackError>
        </div>
        <TermsContainer>
          <Label>
            <input type="checkbox" name="terms" id="terms" />
            Acepto los Términos y Condiciones
          </Label>
        </TermsContainer>
        {false && <MessageError>
          <p>
            <FaExclamationTriangle />
            <b>Error:</b> Por favor llena el formulario correctamente.
          </p>
        </MessageError>}
        <CenteredButtonContainer>
          <Button type="submit">Enviar</Button>
          <MessageSuccess>Formulario enviado exitosamente!</MessageSuccess>
        </CenteredButtonContainer>
      </Form>
    </main>
  );
}
