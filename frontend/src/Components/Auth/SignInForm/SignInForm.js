import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as ErrorIcon } from 'Assets/Svg/ErrorIcon.svg';
import { ReactComponent as MailIcon } from 'Assets/Svg/EmailIcon.svg';
import { ReactComponent as PasswordIcon } from 'Assets/Svg/PasswordIcon.svg';
import { ReactComponent as EyeIcon } from 'Assets/Svg/EyeIcon.svg';
import { SignIn } from 'State/Actions/Auth';
import {
  StyledForm,
  StyledField,
  FieldError,
  FieldWrapper,
  StyledError,
  StyledErrorWrapper,
  ButtonWrapper,
  Button,
  MailIconWrapper,
  PasswordIconWrapper,
  ShowIconWrapper,
} from './SignInForm.styled';

const SignInForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.Auth.errorMessage);

  const [shown, setShown] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Pole wymagane')
      .email('Nieprawidłowy adres email'),
    password: Yup.string().required('Pole wymagane'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(SignIn(values));
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
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
            <Button type="submit">Zaloguj Się</Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignInForm;
