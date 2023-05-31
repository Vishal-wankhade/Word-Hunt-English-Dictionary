
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import   { Container }  from "@mui/material";
import Header from "./components/header/Header"
import Definations from "./components/Definations/Definations";
import Switch from '@mui/material/Switch';

function App() {
    
  const [word,setWord] = useState("");
    const [meanings,setMeanings] = useState([]);
    const [category,setCategory] = useState("en");

  
  




    const dictionaryApi = async ()=>{
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

        console.log(data);
        setMeanings(data.data);
      } catch (error) {
        console.log(error);

      }
    }

    

    useEffect(() => {
      dictionaryApi();
    
    }, [word,category]);
    
    return <div className="App" style={{height:"100vh", backgroundColor:"purple", color:"white"}}>

      <Container maxWidth="md" style={{display:"flex", flexDirection:"column", height:"100vh"}}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>

      {meanings && (
      <Definations word={word} meanings={meanings} category={category}/>
      )}

      </Container>
    
     </div>;
  
}




export default App;
