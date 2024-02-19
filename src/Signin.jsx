import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { CardContent , Typography } from '@mui/material'
import App from './App.jsx'
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import {auth} from './firebase-config.js'

function Signin(){
  const [signinEmail,setSigninEmail]=useState("")
  const [signinPassword,setSigninPassword]=useState("")
  const [user,setUser]=useState({})
  onAuthStateChanged (auth,(currentUser)=>{
     setUser(currentUser)
    })

    const signin = async () =>{
     const user = await signInWithEmailAndPassword(
       auth,
       signinEmail,
       signinPassword
     )
     try{
         console.log(user)
     }
     catch(error){
       console.log(error.message)
     }
  }
  return <div>
     <div style={{
        display:'flex',
        justifyContent:'center',
     }}>
        <Typography variant='h4'>Sign In</Typography><br /><br />
     </div>
    <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
        <Card variant="outlined" style={{
            width:400,
            padding:50
        }}>
    
 <TextField fullWidth= {true} id="outlined-basic" label="Email" variant="outlined"  onChange={(e) => setSigninEmail(e.target.value)}/> <br /><br />
 <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined"  onChange={(e) => setSigninPassword(e.target.value)}/> <br /><br />
  <Button variant="contained" onClick={signin}>Sign In</Button>
  <h3>user logged in:</h3>
  {user?.email}


</Card>
 </div>
 
  </div>
}

export default Signin;