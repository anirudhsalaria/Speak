import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React from 'react'

export default function App() {
  SpeechRecognition.startListening({continuous: true});

  const {transcript,browserSupportsSpeechRecognition } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return null
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Convertor</h2>
        <br />
        <p>Convert your voice to text</p>

        <div className="main-content">
          
        </div>

        <div className="btn-style">
          <button>Copy</button>
          <button>Start Listening</button>
          <button>Stop Listening</button>
        </div>
      </div>
    </>
  )
}
