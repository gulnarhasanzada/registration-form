import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import InfoTable from './components/InfoTable'
import Container from 'react-bootstrap/esm/Container'

function App() {
  const [formObj, setFormObj] = useState({
    email: '',
    password: '',
    city: '',
    type: '',
    check: false
  })


  return (
    <Container>
      <RegistrationForm setFormObj={setFormObj} formObj={formObj}/>
      <InfoTable {...formObj}/>
    </Container>
  )
}

export default App
