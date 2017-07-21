import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const LoginForm = ({setValue, submit, username, password}) => {

  return <form>
    <TextField marginForm id="username" label="Username" type="text" value={username}
               onChange={event => setValue({[event.target.id]: event.target.value})}/>
    <br/>

    <TextField marginForm id="password" label="Password" type="password" value={password}
               onChange={event => setValue({[event.target.id]: event.target.value})}/>
    <br/>
    <br/>

    <Button raised onTouchTap={() => submit()}>Log In</Button>
  </form>
}

export default LoginForm