import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Container from "react-bootstrap/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container as="main">
      <App />
    </Container>
    
  </React.StrictMode>,
)
