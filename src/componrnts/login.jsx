import React, { useState } from 'react';
import { api } from '../utils/utils';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      const { access_token } = response.data;
      // Call the onLogin function with the access token
      onLogin(access_token);
      // Show success toast message
      toast.success('Login successful', { position: 'top-right', autoClose: 3000 });
      // Navigate to tasklist
      navigate('/tasklist');
    } catch (error) {
      console.error('Login failed:', error);
      // Show error toast message
      toast.error('Login failed. Please check your credentials.', { position: 'top-right', autoClose: 3000 });
    }
  };

  return (
    <>
      <Stack spacing={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
      </Stack>
      <ToastContainer />
    </>
  );
};

export default Login;
