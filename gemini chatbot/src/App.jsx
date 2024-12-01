import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  

  const[search,setSearch]=useState("")
  const[answer,setAnswer]=useState("")

  const API_KEY="AIzaSyBeeJrm-5bP5iEc0OAKnWXAQcrEAc78Oyc"
  const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`
  const generateResponse= async ()=>{
    setAnswer("loading...")
    const response=await axios({
      url:API_URL,
      method:"POST",
      data:{
        contents:[
          {
            parts:[{
              text:`${search}`,
            }]
          }
        ]

      }
    })

    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    setSearch("")
  }


  return (
    <div className='main'>
     <h1>AI CHAT</h1>
     <textarea value={search} onChange={(e)=>setSearch(e.target.value)}></textarea>
     <button onClick={generateResponse}>generate answer</button>
     <pre>
      {answer}
     </pre>
    </div>
  )
}

export default App
