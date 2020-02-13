import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
class Login extends React.Component{
render(){
    return(
        <div>
        <h1>Login</h1>
        <form>
        <Input type='text' name='uname' placeholder='Username' /><br />
        <Input type='password' name='pswd' placeholder='Password' /><br />
        <Button type='submit' color='primary'>Login</Button>
        <Button type='reset' color='secondary'>Clear</Button>
        </form>
        </div>
    )
}
}
export default Login;