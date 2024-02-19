import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {AppBar , Toolbar} from "@mui/material"
import Drone from './drone.json'
import Lottie from 'lottie-react'
import './Home.css'
//import ImageSlider from "./ImageSlider";
import Slideshow from "./Slider";
import ContactUsPage from './ContactUsPage.jsx'
import {auth} from './firebase-config.js'
import {signOut} from 'firebase/auth'
import StickyFooter from './StickyFooter.jsx'


function Home(){

   const signout = async () =>{
     await signOut(auth)
   }
    return(
      <>
     <div style={{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:'20px'
     }}>
         <div>
        <Typography>AEROGO</Typography>
        </div>
        <div id="inner1"> 
           <AppBar position="static" style={{
            width:'100fw',
            backgroundColor:'white'
           }}>
        <Toolbar>
         <Link to="/courses">
           <Button variant="text" >Online Courses</Button>
              </Link>
              <Link to="/shop">
           <Button variant="text" >Shop</Button>
              </Link>
              <Link to="/contactus">
           <Button variant="text" >Contact Us</Button>
              </Link>
         <Link to="/signup">
           <Button variant="text" >Sign Up</Button>
              </Link>
          <Link to="/signin">
           <Button variant="text" >Sign In</Button>
              </Link>
              
           <Button variant="text" onClick={signout}>Sign Out</Button>

        </Toolbar>
      </AppBar>
        </div>
    </div>
    <div>
     <div id="inner2" style={
      {
         float:'left'
      }
    }>
         <Lottie loop={true} animationData={Drone} style={{ width: '300px', height: '300px'}
       }/>
       </div>
       <div>
         <Typography style={{ marginLeft: '20px' ,textAlign:'center'}}>AEROGO-Aeromodelling
Welcome to AEROGO, where innovation meets the sky! As India's first online aeromodelling community, we're here to unite enthusiasts, elevate your flying experience, and redefine the way you engage with the skies. Learn, Build, and Explore to new heights with AEROGO!</Typography>
       </div>
   </div>
   <StickyFooter />
</>
    
    )

}


export default Home

 