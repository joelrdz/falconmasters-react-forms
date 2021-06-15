import { useState } from 'react';
import { Form, Label, TermsContainer, CenteredButtonContainer, Button, MessageSuccess, MessageError } from './elements/Forms';
import { FaExclamationTriangle } from 'react-icons/fa';
import Input from './components/Input';

export default function App() {
  const [user, setUser] = useState({field: '', valid: null});
  const [name, setName] = useState({field: '', valid: null});
  const [password, setPassword] = useState({field: '', valid: null});
  const [repassword, setRepassword] = useState({field: '', valid: null});
  const [email, setEmail] = useState({field: '', valid: null});
  const [phone, setPhone] = useState({field: '', valid: null});

  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  return (
    <main>
      <Form action="">
        <Input
          type="text"
          name="user"
          state={user}
          setState={setUser}
          label="Usuario"
          placeholder="john117"
          feedbackError="El usuario tiene que ser de 4 a 16 dígitos, y solo puede contener números, letras y guion bajo."
          expression={expressions.user}
        />
        <Input
          type="text"
          name="name"
          state={name}
          setState={setName}
          label="Nombre"
          placeholder="John Wick"
          feedbackError="El nombre solo puede contener letras y espacios."
          expression={expressions.name}
        />
        <Input
          type="password"
          name="password"
          state={password}
          setState={setPassword}
          label="Contraseña"
          feedbackError="La contraseña tiene que ser de 4 a 12 dígitos."
          expression={expressions.password}
        />
        <Input
          type="password"
          name="repassword"
          state={repassword}
          setState={setRepassword}
          label="Repetir Contraseña"
          feedbackError="Ambas contraseñas deben ser iguales."
          // Puedes pasar una función a ejecutar cuando haya un cambio en el input.
        />
        <Input
          type="email"
          name="email"
          state={email}
          setState={setEmail}
          label="Correo Electrónico"
          placeholder="john117@email.com"
          feedbackError="El correo solo puede contener letras, números, puntos, guiones y guion bajo."
          expression={expressions.email}
        />
        <Input
          type="tel"
          name="phone"
          state={phone}
          setState={setPhone}
          label="Teléfono"
          placeholder="4491234567"
          feedbackError="El teléfono solo puede contener números y el máximo son 14 dígitos."
          expression={expressions.phone}
        />
        <TermsContainer>
          <Label>
            <input type="checkbox" name="terms" id="terms" />
            Acepto los Términos y Condiciones
          </Label>
        </TermsContainer>
        {false &&
          <MessageError>
            <p>
              <FaExclamationTriangle />
              <b>Error:</b> Por favor llena el formulario correctamente.
            </p>
          </MessageError>
        }
        <CenteredButtonContainer>
          <Button type="submit">Enviar</Button>
          <MessageSuccess>Formulario enviado exitosamente!</MessageSuccess>
        </CenteredButtonContainer>
      </Form>
    </main>
  );
}
