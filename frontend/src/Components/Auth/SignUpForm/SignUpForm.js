import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as ErrorIcon } from 'Assets/Svg/ErrorIcon.svg';
import { ReactComponent as PersonIcon } from 'Assets/Svg/PersonIcon.svg';
import { ReactComponent as MailIcon } from 'Assets/Svg/EmailIcon.svg';
import { ReactComponent as PasswordIcon } from 'Assets/Svg/PasswordIcon.svg';
import { ReactComponent as EyeIcon } from 'Assets/Svg/EyeIcon.svg';
import { SignUp } from 'State/Actions/Auth';
import {
  StyledForm,
  StyledField,
  FieldError,
  FieldWrapper,
  StyledError,
  StyledErrorWrapper,
  ButtonWrapper,
  Button,
} from 'Components/Auth/SignInForm/SignInForm.styled';
import {
  MailIconWrapper,
  PasswordIconWrapper,
  ShowIconWrapper,
  PersonIconWrapper,
} from './SignUpForm.styled';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.Auth.errorMessage);

  const [shown, setShown] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Pole wymagane')
      .matches(/^[a-zA-Z]/, 'Imię możę zawierać tylko litery'),
    email: Yup.string()
      .required('Pole wymagane')
      .email('Nieprawidłowy adres email'),
    password: Yup.string().required('Pole wymagane'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(SignUp(values));
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <FieldWrapper>
            <StyledField
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Imię"
              isError={touched.name && errors.name}
            />
            {touched.name && errors.name ? (
              <FieldError>{errors.name}</FieldError>
            ) : null}
          </FieldWrapper>
          <PersonIconWrapper>
            <PersonIcon />
          </PersonIconWrapper>
          <FieldWrapper>
            <StyledField
              id="email"
              name="email"
              type="text"
              autoComplete="off"
              placeholder="email"
              isError={touched.email && errors.email}
            />
            {touched.email && errors.email ? (
              <FieldError>{errors.email}</FieldError>
            ) : null}
          </FieldWrapper>
          <MailIconWrapper>
            <MailIcon />
          </MailIconWrapper>
          <FieldWrapper>
            <StyledField
              id="password"
              name="password"
              type={shown ? 'text' : 'password'}
              autoComplete="off"
              placeholder="hasło"
              isError={touched.password && errors.password}
            />
            {touched.password && errors.password ? (
              <FieldError>{errors.password}</FieldError>
            ) : null}
          </FieldWrapper>
          <PasswordIconWrapper>
            <PasswordIcon />
          </PasswordIconWrapper>
          <ShowIconWrapper onClick={() => setShown(!shown)}>
            <EyeIcon />
          </ShowIconWrapper>
          {errorMessage ? (
            <StyledErrorWrapper>
              <StyledError svgUrl={ErrorIcon}>{errorMessage}</StyledError>
            </StyledErrorWrapper>
          ) : null}
          <ButtonWrapper>
            <Button type="submit">Utwórz Konto</Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
