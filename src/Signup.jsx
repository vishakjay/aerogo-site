import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { CardContent , Typography } from '@mui/material'
import App from './App.jsx'
import { useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase-config.js'
import StickyFooter from './StickyFooter.jsx'

function Signup(){
    const [signupEmail,setSignupEmail]=useState("")
    const [signupPassword,setSignupPassword]=useState("")
    const [user,setUser]=useState({})

    onAuthStateChanged (auth,(currentUser)=>{
     setUser(currentUser)
    })

    const signup = async () =>{
       const user = await createUserWithEmailAndPassword(
         auth,
         signupEmail,
         signupPassword
       )
       try{
           console.log(user)
       }
       catch(error){
         console.log(error.message)
       }
    }
  return <><div>
     <div style={{
        display: 'flex',
        justifyContent: 'center',
     }}>
        <Typography variant='h4'>Sign Up</Typography><br /><br />
     </div>
     <div style={{
        display: 'flex',
        justifyContent: 'center',
     }}>
        <Typography>Already a Member ? <a>Log In</a></Typography><br /><br />
     </div>
     <div style={{
        display: 'flex',
        justifyContent: 'center'
     }}>
        <Card variant="outlined" style={{
           width: 400,
           padding: 50
        }}>

           <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" onChange={(event) => { setSignupEmail(event.target.value) } } /> <br /><br />
           <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" onChange={(event) => { setSignupPassword(event.target.value) } } /> <br /><br />
           <Button variant="contained" onClick={signup}>SignUp</Button>
           <h3>User Logged in</h3>
           {user?.email}

        </Card>
     </div>

  </div><StickyFooter /></>
}

export default Signup;