import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';
import React from 'react';


export default function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy)
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>

      <div className="container">
        <h2>Speech to Text Convertor</h2>
        <br />
        <p>Convert your voice to text</p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>Copy</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  )
}
