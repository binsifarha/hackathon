import { Button, TextField } from '@material-ui/core'
import React from 'react'
import useForm from './Read'
import axios from 'axios'



const SignUP= () => {
    var [value, setValue] = useForm({ Name: "", email: "", Username: "",Password :"",ConfirmPassword:""})
    
    const buttonHandle=()=>{

        console.log(value)
        axios.post("http://localhost:8080/add_account", value).then(
      (response) => {
        console.log(response.data)

        if(response.data.status==="Success")
        {
          alert("successfully added")
        }
        else
        {
          alert("error")
        }
      }
    )
  }
    
      
    return (
        <div>
            
            <TextField name="Name"
        fullWidth
        value={value.Name}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the name" />
      <TextField
        name="email"
        value={value.email}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="Emailadress" />
      <TextField
        name="Username"
        value={value.Username}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="username" />
      <TextField
        fullWidth
        name="Password"
        value={value.Password}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        type="password"
        label="Enter the Password" />
      <TextField
        fullWidth
        name="ConfirmPassword"
        type="password"
        value={value.ConfirmPassword}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        label="  ConfirmPassword" />
        <Button
        onClick={buttonHandle}
        fullWidth
        color="primary"
        variant="contained">SignUP</Button>

     
        
        </div>
    
    )
}
       

export default SignUP