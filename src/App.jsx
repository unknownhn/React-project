import { useState,useEffect } from 'react'
import { lightTheme,darkTheme } from './theme.js';
import Rating from '@mui/material/Rating';
import {
  ThemeProvider,
  CssBaseline,
  IconButton,
  Typography,
  Container,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import Box from './components/Box.jsx'
import { Cardb } from './components/Card.jsx';
import './App.css'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Swither from "./components/Swither.jsx"
import axios from 'axios'
import { Brightness4 } from '@mui/icons-material';
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import user from "./assets/user.png";
import html from "./assets/html.png"
import vscode from "./assets/vscode.png"
import wave from "./assets/wave.png"
import git from "./assets/git.png"
import sass from "./assets/sass.png"
import css from "./assets/css.png"
import superman from "./assets/superman.png"
import js from "./assets/js.png"
import b from "./assets/b.png"
import vector from "./assets/vector.png"
import idont from "./assets/idont.png"
import react from "./assets/react.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"


function App() {

  /////////dark
  const storedTheme = localStorage.getItem("darkMode")
  const [darkMode, setDarkMode]=useState(storedTheme===true) 

  const toggleDarkmode=()=>{
  const newDarkMode =!darkMode;

  setDarkMode(newDarkMode);
  localStorage.setItem("darkMode",newDarkMode);
  }

const theme=darkMode?darkTheme:lightTheme

  
  return (
    <>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
      <div className='px-[8%] pt-[4%]'>
       <div className='flex items-center justify-between'>   
       <img src={logo} alt="" className='w-[90px] h-[50px]' />
     <div className='flex items-center gap-[20px]'>
      <ul className='flex gap-[20px] md:hidden text-[20px]'>
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
     <IconButton onClick={toggleDarkmode} color="inherit">
      <Brightness4/>
     </IconButton>
     </div>
    </div>
    <div className='flex justify-between mt-[10%] md:flex-col'>
      <h1 className='text-[58px] w-[638.62px] md:w-[300px] md:text-[40px]'>Hi 👋,<br />
      My name is <br />
      <span className='text-[#13B0F5]'>Nushofarin</span> <br />
      I build things for web</h1>
      {/* <img src={user} alt="error" className='w-[300px]' /> */}
    </div>
    <div className='flex justify-between md:flex-col mt-[10%] md:gap-[20px]'>
     <div className='w-[48%] md:w-[100%]'>
     <div >
      <h1 className='text-[42px] font-bold'>About Me</h1><br />
      <p>The Generator App is an online tool that helps you to export ready-made templates 
        ready to work as your future website. It helps you to combine slides,
         panels and other components and export it as a set of static files: HTML/CSS/JS.</p><br />
     </div>
     <h1 className='text-[42px] font-bold'>Education</h1><br />
     <Box name="Bachelor in Electronics & Communication"/>
     </div>
      <div className='w-[49%] md:w-[100%]'> 
      <h1 className='text-[42px] font-bold'>Work Experience</h1><br />
      <Box name="Junior Web Developer"/><br />
        <Box name="Web Development Intern"/><br />
        <Box name="SEO / SEM Specialist"/>
      </div>
    </div>
    <div className='mt-[10%]'>
      <h1 className='text-center text-[48px] font-bold'>My Tech Stack</h1>
      <p className='text-center text-[25px] '> Technologies I’ve been working with recently</p>
       <div className='mt-[5vh]' >
       <div className='flex flex-wrap justify-between my-[20px]'>
       <img src={html} alt="error" className='w-[100px] h-[100px]' />
        <img src={css} alt="error" className='w-[100px] h-[100px]'  />
        <img src={js} alt="error"  className='w-[100px] h-[100px]' />
        <img src={react} alt="error"  className='w-[100px] h-[100px]' />
        <img src={vector} alt="error" className='w-[100px] h-[100px]'  />
        <img src={b} alt="error"  className='w-[100px] h-[100px]' /> 
       </div>

        <div className='flex flex-wrap justify-between my-[20px]'>  
        <img src={wave} alt="error"  className='w-[100px] h-[100px]' />
        <img src={sass} alt="error" className='w-[100px] h-[100px]'  />
        <img src={idont} alt="error"  className='w-[100px] h-[100px]' />
        <img src={superman} alt="error" className='w-[100px] h-[100px]'  />
        <img src={vscode} alt="error" className='w-[100px] h-[100px]'  />
        <img src={git} alt="error"  className='w-[100px] h-[100px]' />
        </div>
       </div>
    </div>
    <div className='my-[10%]'>
    <h1 className='text-center text-[48px] font-bold'>Projects</h1>
    <p className='text-center text-[25px] '> Things I’ve built so far</p>
    <div className='flex flex-wrap justify-between mt-[8%]'>
    <Cardb img={img1} icon1={icon1} icon2={icon2}/>
    <Cardb img={img2} icon1={icon1} icon2={icon2}/>
    <Cardb img={img3} icon1={icon1} icon2={icon2}/>
    <Cardb img={img4} icon1={icon1} icon2={icon2}/>
    <Cardb img={img5} icon1={icon1} icon2={icon2}/>
    <Cardb img={img6} icon1={icon1} icon2={icon2}/>
    </div>
    </div>
    {/* end */}
    <div className='my-[5%]'>
     <div className='flex items-center justify-between pb-[20px] border-b-[2px] md:block'>
     <img src={logo2} alt="" />
     <div className='flex gap-[50px] items-center md:block'>
      <h1>+91 12345 09876</h1>
      <h1>info@example.com</h1>
      <div className='flex gap-[20px] items-center md:my-[20px]'>
        <img src={icon2} alt="" />
      </div>
     </div>
     </div>
      <div className='flex items-center justify-between md:block'>
      <ul className='my-[5%] flex gap-[20px] md:flex-wrap '>
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <h1>Designed and built by Pavan MG with Love & Coffee</h1>
      </div>
    </div>

    </div>
       
     
      </ThemeProvider>
    </>
  )
}

export default App
