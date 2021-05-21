import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import { signIn } from "../../../features/user/userSlice";
import { useAppDispatch, useForm } from "../../hooks";

interface Props {
  handleClose: Function;
}
export const SignInForm = ({ handleClose }: Props) => {
  const [values, handleChange] = useForm({
    username: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    if (e.currentTarget.checkValidity()) {
      dispatch(signIn({ username: values.username }));
      handleClose();
    }
  };
  return (
    <Form
      validated={validated}
      id="signInForm"
      className="needs-validation"
      noValidate
      onSubmit={onSubmit}
    >
      <Form.Group controlId="username">
        <Form.Label>Korisničko ime</Form.Label>
        <Form.Control
          name="username"
          onChange={handleChange}
          value={values.username}
          placeholder="Korisničko ime"
          required
        />
        <Form.Control.Feedback type="invalid">
          Korisničko ime je obvezno polje
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Lozinka</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChange}
          value={values.password}
          required
          minLength={8}
          type="password"
          placeholder="Lozinka"
        />
        <Form.Control.Feedback type="invalid">
          Potrebno je najmanje 8 znakova
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};
