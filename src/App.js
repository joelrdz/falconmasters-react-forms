import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Form, Label, TermsContainer, CenteredButtonContainer, Button, MessageSuccess, MessageError } from './elements/Forms';
import Input from './components/Input';

export default function App() {
  const [user, setUser] = useState({field: '', valid: null});
  const [name, setName] = useState({field: '', valid: null});
  const [password, setPassword] = useState({field: '', valid: null});
  const [repassword, setRepassword] = useState({field: '', valid: null});
  const [email, setEmail] = useState({field: '', valid: null});
  const [phone, setPhone] = useState({field: '', valid: null});
  const [terms, setTerms] = useState(false);
  const [formValid, setFormValid] = useState(null);

  const expressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validatePasswordsHandler = () => {
    if (password.field.length > 0) {
      if (password.field !== repassword.field) {
        setRepassword((prevState) => {
          return {...prevState, valid: 'false'}
        })
      } else {
        setRepassword((prevState) => {
          return {...prevState, valid: 'true'}
        })
      }
    }
  }

  const changeTermsHandler = (e) => {
    setTerms(e.target.checked);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      user.valid === 'true' &&
      name.valid === 'true' &&
      password.valid === 'true' &&
      repassword.valid === 'true' &&
      email.valid === 'true' &&
      phone.valid === 'true' &&
      terms
    ) {
      setFormValid(true);
      setUser({field: '', valid: null});
      setName({field: '', valid: null});
      setPassword({field: '', valid: null});
      setRepassword({field: '', valid: null});
      setEmail({field: '', valid: null});
      setPhone({field: '', valid: null});
      setTerms(false);
    } else {
      setFormValid(false);
    }
  }

  return (
    <main>
      <Form action="" onSubmit={submitHandler}>
        <Input
          type="text"
          name="user"
          state={user}
          setState={setUser}
          label="Usuario"
          placeholder="john117"
          feedbackError="El usuario tiene que ser de 4 a 16 dígitos, y solo puede contener números, letras y guion bajo."
          validation={expressions.user}
        />
        <Input
          type="text"
          name="name"
          state={name}
          setState={setName}
          label="Nombre"
          placeholder="John Wick"
          feedbackError="El nombre solo puede contener letras y espacios."
          validation={expressions.name}
        />
        <Input
          type="password"
          name="password"
          state={password}
          setState={setPassword}
          label="Contraseña"
          feedbackError="La contraseña tiene que ser de 4 a 12 dígitos."
          validation={expressions.password}
        />
        <Input
          type="password"
          name="repassword"
          state={repassword}
          setState={setRepassword}
          label="Repetir Contraseña"
          feedbackError="Ambas contraseñas deben ser iguales."
          // Puedes pasar una función a ejecutar cuando haya un cambio en el input.
          validatePasswords={validatePasswordsHandler}
        />
        <Input
          type="email"
          name="email"
          state={email}
          setState={setEmail}
          label="Correo Electrónico"
          placeholder="john117@email.com"
          feedbackError="El correo solo puede contener letras, números, puntos, guiones y guion bajo."
          validation={expressions.email}
        />
        <Input
          type="tel"
          name="phone"
          state={phone}
          setState={setPhone}
          label="Teléfono"
          placeholder="4491234567"
          feedbackError="El teléfono solo puede contener números y el máximo son 14 dígitos."
          validation={expressions.phone}
        />
        <TermsContainer>
          <Label>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={terms}
              onChange={changeTermsHandler}
            />
            Acepto los Términos y Condiciones
          </Label>
        </TermsContainer>
        {formValid === false &&
          <MessageError>
            <p>
              <FaExclamationTriangle />
              <b>Error:</b> Por favor llena el formulario correctamente.
            </p>
          </MessageError>
        }
        <CenteredButtonContainer>
          <Button type="submit">Enviar</Button>
          {formValid && <MessageSuccess>Formulario enviado exitosamente!</MessageSuccess>}
        </CenteredButtonContainer>
      </Form>
    </main>
  );
}