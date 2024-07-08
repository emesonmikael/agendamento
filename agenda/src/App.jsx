// src/components/AgendamentoForm.js
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

const AgendamentoForm = () => {
  const [nome, setNome] = useState('');
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [ubs, setUbs] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend ou fazer outras ações
    console.log('Dados enviados:', { nome, servico, data });
    const telegramToken = '6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
    const chatId = '6587022667'; // O ID do chat onde você deseja enviar os dados

    try {
      await axios.post(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        //`https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `
           Nome : ${nome}
           Serviço : ${servico}
           Data : ${data}
           Ubs : ${ubs}
           
          `,
        }
      );

      console.log('Dados enviados com sucesso para o Telegram!');
      alert("dados enviado om suesso");
    } catch (error) {
      console.error('Erro ao enviar dados para o Telegram:', error);
    }
  };

  return (
    
    <div>
      
    
       <img src="data:image/jpeg;base64,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" alt=""></img>
       <h1>Agendamento de visitas nas Unidades de Saude </h1>
       <p>As visitas serão feitas no turno  da manhã </p>
   
       <div >
      <iframe src="https://calendar.google.com/calendar/embed?src=esuspaudosferros%40gmail.com&ctz=America%2FFortaleza"  width="800" height="600" frameborder="0" scrolling="no"></iframe>
 
 
       </div>
 
      <form onSubmit={handleSubmit}>
        <label>
          Nome : 
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Visitas :
          <input
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          />
        </label>
        <br />
        <label>
          UBS : 
          <input
            type="text"
            value={ubs}
            onChange={(e) => setUbs(e.target.value)}
          />
        </label>
        <br />
        <label>
          Data : 
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <br />
        
        <button type="submit" color='red'>Agendar</button>
      </form>
      
    </div>
    
    
  );
};

export default AgendamentoForm;
