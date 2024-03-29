import React from 'react';
import emailjs from 'emailjs-com';
import '../../App.css';

export default function Contactos() {

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_s3lf', e.target, 
  'user_3Zue9mTqDov8BymXNzcME')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

  return (
  <div>
    <div className='container'>
      <form onSubmit={sendEmail}>
        <div className='row pt-5 mx-auto'>
          <div className='col-8 form-group mx-auto'>
            <input type='text' className='form-control' placeholder='Nome' name='nome'/>
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <input type='email' className='form-control' placeholder='Email' name='email'/>
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <input type='text' className='form-control' placeholder='Assunto' name='assunto'/>
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <textarea className='form-control' id='' cols='30' rows='8' placeholder='A sua mensagem' name='messagem'></textarea>
          </div>
          <div className='col-8 pt-3 mx-auto'>
            <input type='submit' className='btn btn-info' value='Enviar'></input>
          </div>
        </div>
      </form>
    </div>
  </div>
    )
}