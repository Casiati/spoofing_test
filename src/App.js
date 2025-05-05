import React, { useState } from 'react';
import axios from 'axios';
import logo from './assets/logo.webp';
import logo2 from './assets/badge.png';
import './App.css';


function App() {

  
  const [step, setStep] = useState(1); 
  const [menuOpen, setMenuOpen] = useState(false);
  


  const [emailData, setEmailData] = useState({ user: '', password: '' });
  const [emailContent, setEmailContent] = useState({ recipient: '', subject: '', message: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailContent({ ...emailContent, [name]: value });
  };

  const handleLogin = async () => {
    try {
      setStep(2); 
    } catch (error) {
      console.error("Erro de autenticação:", error);
    }
  };

  const handleSendEmail = async () => {
    try {      
      const apiUrl = import.meta.env.VITE_API_GATEWAY_URL;

      const response = await axios.post(apiUrl, {
        recipient: emailContent.recipient,
        subject: emailContent.subject,
        message: emailContent.message
      });
  
      if (response.status === 200) {
        alert("E-mail enviado com sucesso!");
        setEmailContent({ recipient: '', subject: '', message: '' });
      } else {
        alert("Falha ao enviar e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Erro ao enviar o e-mail.");
    }
  };
  

  return (
    <div className="App">
      <div className="app-bar">
  <div className="logo-group">
    <img src={logo} alt="Logo" className="logo" />
    <img src={logo2} alt="Logo 2" className="logo second-logo" />
  </div>

  <div className="menu-wrapper">
  <button className="menu-button" onClick={() => setMenuOpen(true)}>☰</button>
</div>

{menuOpen && (    
  <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
    <button className="close-button" onClick={() => setMenuOpen(false)}>&times;</button>
    
    <div className="menu-items">
      <div className="menu-item" onClick={() => { setStep(1); setMenuOpen(false); }}>/autenticação</div>
      <div className="menu-item" onClick={() => { setStep(2); setMenuOpen(false); }}>/enviar_e-mail</div>
      <div className="menu-item" onClick={() => { window.open('https://ops.team', '_blank'); setMenuOpen(false); }}>/ops.team</div>
    </div>
  </div>
)}


</div>




      <div className="background"></div>

      <div className="overlay"></div>

      <div className="container">
        <h1>{step === 1 ? 'Autenticação' : 'Envio de E-mail'}</h1>

        {step === 1 ? (
          <div>
            <h2>Login SMTP</h2>
            <form>
              <input
                type="email"
                name="user"
                value={emailData.user}
                onChange={handleLoginChange}
                placeholder="Seu e-mail"
              />
              <input
                type="password"
                name="password"
                value={emailData.password}
                onChange={handleLoginChange}
                placeholder="Sua senha"
              />
              <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
          </div>
        ) : (
          <div>
            <form>
              <input
                type="email"
                name="recipient"
                value={emailContent.recipient}
                onChange={handleEmailChange}
                placeholder="Destinatário"
              />
              <input
                type="text"
                name="subject"
                value={emailContent.subject}
                onChange={handleEmailChange}
                placeholder="Assunto"
              />
              <textarea
                name="message"
                value={emailContent.message}
                onChange={handleEmailChange}
                placeholder="Mensagem"
                rows="5"
              />
              <button type="button" onClick={handleSendEmail}>Enviar E-mail</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
