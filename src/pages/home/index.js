import React, { useRef } from 'react';

import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import logo from 'assets/img/codeform.svg';
import {
  InputText,
  Button,
  Icon,
  InputSelect,
  InputCheckbox,
} from 'components';
import { optionsCheckboxInput, optionsSelectInput } from 'pages/home/formData';
import { HomeContainer, FormContent } from 'pages/home/styles';
import * as Yup from 'yup';

export default function Home() {
  const formRef = useRef(null);

  const initialData = {
    email: 'diego.coderamos@gmail.com',
    address: {
      state: 'são paulo',
      country: 'brazil',
    },
  };

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('the name is mandatory.'),
        email: Yup.string()
          .email('please, insert a valid email.')
          .required('the email is mandatory.'),
        stacks: Yup.array()
          .of(Yup.string().required())
          .required('choose one of the options'),
        address: Yup.object().shape({
          street: Yup.string().required('the street is mandatory.'),
          number: Yup.string(),
          neighborhood: Yup.string().required('the neighborhood is mandatory.'),
          city: Yup.string()
            .required('the city is mandatory.')
            .min(3, 'min 3 characters'),
          state: Yup.string().required('the state is mandatory.'),
          country: Yup.string().required('the country is mandatory.'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});
      reset();
      console.log(data);
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
      <Icon src={logo} alt="codeform logo" width={180} />
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <FormContent>
          <InputText name="name" label="name" />
          <InputText name="email" type="email" label="email" />
          <InputText name="password" type="password" label="password" />
          <InputCheckbox
            name="stacks"
            label="stacks"
            options={optionsCheckboxInput}
          />
          <Scope path="address">
            <InputText name="street" label="street" />
            <InputText name="number" label="number" />
            <InputText name="neighborhood" label="neighborhood" />
            <InputText name="city" label="city" />
            <InputSelect
              name="state"
              label="state"
              options={optionsSelectInput}
            />
            <InputText name="country" label="country" />
          </Scope>

          <Button type="submit" text="send" />
        </FormContent>
      </Form>
    </HomeContainer>
  );
}
