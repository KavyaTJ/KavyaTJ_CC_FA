import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";

function App(){
  const[word,setWord]=useState("")
  const [meaning,setMeaning]=useState([])

  const API=async()=>{
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
 
      setMeaning(data.data)
    }
    catch(error){
      console.log(error);
    }
    };
    console.log(meaning);
    useEffect(()=>{
      API();
    },[word]);
    return <div className="App" style={{height:"100vh",backgroundColor:"blue"}}>
      <div className="container">
        Dictionary
  <Header
         />
</div>
    </div>
  }

  export default App;