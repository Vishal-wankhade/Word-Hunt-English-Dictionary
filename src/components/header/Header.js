import React from 'react'
import './Header.css';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';

import { ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import categories from './data/category';


const Header = ({setCategory, category , word , setWord}) => {
    const darkTheme = createTheme({
        palette: {
        
          primary: {
            main: '#fff', // Set the text color to white
          },
          type:"dark",
        },
      });
      
      const handleChange = (category) =>{
         setCategory(category);
         setWord("");
      };

  return (
    <div className='header'>
        
        <span className='title'>{word ? word :"Word Hunt"}</span>
         <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
            <TextField
            
            style={
              {color:"white"}
            }
            className='search'
            label="Search a Word"
              //  variant="standard" 
               value={word}
               onChange={(e) => setWord (e.target.value)}
               
               />
            {/* <TextField
            className="select"
            select label="language"
            variant="standard" 
          value={category}
          onChange={(e) => handleChange(e.target.value) }
          helperText="Please select your language"
        >
          {
            categories.map((option)=>(
              <MenuItem key={option.label} value={option.value}>
              {option.value}
                </MenuItem>
            ))
          }
          
            
        
        </TextField> */}
         </ThemeProvider>
         </div>
    </div>
  )
}

export default Header