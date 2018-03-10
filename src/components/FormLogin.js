import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Login = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='password' type = "password"/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
export default Login
