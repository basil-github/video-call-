import logo from './logo.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect, useState } from 'react'

function App () {
  const myVideo = useRef()

  const [stream, setStream] = useState()

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(currentStream => {
        setStream(currentStream)

        myVideo.current.srcObject = currentStream
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <video playsInline muted ref={myVideo} autoPlay className='video' />
      </header>
    </div>
  )
}

export default App
