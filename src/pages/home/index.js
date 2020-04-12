import React, { useRef } from 'react';

import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import logo from 'assets/img/codeform.svg';
import { InputText, Button, Icon } from 'components';
import * as Yup from 'yup';

import { HomeContainer, FormContent } from './styles';

export default function Home() {
  const formRef = useRef(null);

  const initialData = {
    email: 'diego.coderamos@gmail.com',
    address: {
      city: 'brisbane',
      state: 'queensland',
    },
  };

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('the name is mandatory.'),
        email: Yup.string()
          .email('please, insert a valid email.')
          .required('the email is mandatory.'),
        address: Yup.object().shape({
          street: Yup.string().required('the street is mandatory.'),
          number: Yup.string(),
          city: Yup.string()
            .required('the city is mandatory.')
            .min(3, 'min 3 characters'),
          state: Yup.string().required('the state is mandatory.'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <HomeContainer>
      <Icon src={logo} alt="codeform logo" />
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <FormContent>
          <InputText name="name" label="name" />
          <InputText name="email" type="email" label="email" />
          <InputText name="password" type="password" label="password" />
          <Scope path="address">
            <InputText name="street" label="street" />
            <InputText name="number" label="number" />
            <InputText name="neighborhood" label="neighborhood" />
            <InputText name="city" label="city" />
            <InputText name="state" label="state" />
          </Scope>

          <Button type="submit" text="enviar" />
        </FormContent>
      </Form>
    </HomeContainer>
  );
}
