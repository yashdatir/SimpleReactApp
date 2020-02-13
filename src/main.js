import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class Main extends React.Component{
   
    render(){
    return(
        <div style={{alignContent:'center'}}>
            <h1>Registration</h1>
            <form action="http://localhost:8081" method="POST" enctype="multipart/form-data">
            <Input type="text" name="uname" placeholder="Full Name" /><br />
            <Input type="email" name="email" placeholder="E mail" /><br />
            <Input type="password"name="pswd" placeholder="Password" /><br />
            <Input type="password" name="cpswd" placeholder="Confirm Password" /><br />
            <Input type="file" name="ppic" /><br />
            <Button type="submit" color="primary">Upload your Image</Button>
            <Button type="reset" color="secondary">Clear</Button>
            </form>
        </div>
    );
}
}
export default Main;