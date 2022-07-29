import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import reactLogo from '../../assets/Lowpoly Happy - Copy@1-1323x665.png'
import './App.css'

function App() {
const nav= useNavigate();
  const click=async()=>{
     if (window.ethereum) {

  try{
    const acconts= await ethereum.request({method:'eth_requestAccounts'});
   var accont=acconts[0]
    alert('foi'+accont)
    nav("/inicial",{accont});

  }catch(e){}

    }
  else{
  console.log('erro')
}

  }
  return (
    <div className="App">
      <div>
          <img src={reactLogo} className="logo" />

        <h1>zLIIT</h1>
      </div>
      <div className="card">
        <button onClick={click}>
          Login
        </button>
        <p>
          zLITT Social Media
        </p>
      </div>
      <p className="read-the-docs">
        zLIIT Corporation is a future    </p>
    </div>
  )
}

export default App

