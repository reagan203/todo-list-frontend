import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { api } from '../utils/utils';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'; // Import Chakra UI components

const SignupForm = () => {
  
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await api.post('/signup', values);
      console.log('User signed up successfully:', response.data);
      // Redirect to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
    setSubmitting(false);
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing="4">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" />
              </FormControl>
              <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
                Sign Up
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
