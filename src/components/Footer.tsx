import React, { useState, useRef, FormEvent } from 'react';
import { string, z }  from "zod";
import FadeIn from "../components/FadeIn";
import '../styles/Footer.css';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import emailjs from '@emailjs/browser';

const schema = z.object({
  name: string().min(1, { message: 'Name is required.' }),
  email: string().email(),
  message: string().min(1, { message: 'Message is required.' }),
});

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC<{ onSave: (formValues: FormValues) => void, user?: any }> = ({ onSave, user = {} }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.current) {
      emailjs.sendForm('service_4ur4xxx', 'template_vsc4zeh', form.current, 'OorNK-M-bTrfxrzhv')
        .then((result) => {
          console.log(result.text);
          console.log("Message sent!");
          setSuccessMessage('Message sent successfully!');
          // if (form.current) {
          //   form.current.reset(); // Reset the form after the message is sent
          // }
        }, (error) => {
          console.log(error.text);
        });
    }
  };
  
  const { formState  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { errors } = formState;

  const [successMessage, setSuccessMessage] = useState<string>('');

  return (
    <footer className='foot' id='footer'>
      <div className='footer-container'>
        <div className='footer-text' style={{zIndex:'2'}}>
          <div className='footer-title'>
          <FadeIn>
            <p>Let's build something <span style={{fontStyle:'italic'}}>impactful.</span></p>
            <p style={{lineHeight:'1.3', paddingTop:'15px'}}>Have a question? Want to chat? <br/> Feel free to send me a message.</p> 
            <p>Resume is available upon request.</p>
            <div className="horizontal-divider"></div>
            <p>This website was built and designed by myself.</p>
          </FadeIn>   
        </div>
          <div>
            <div className="links-container">
            <FadeIn delay={`200ms`}>
              <a href="mailto:rosannezhu@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20, marginRight: '5px'  }}></EmailRoundedIcon>
              </a>
              </FadeIn>   
              <FadeIn delay={`300ms`}>
              <a href="https://github.com/roskzhu">
                <GitHubIcon style={{ fontSize: 19, marginRight: '5px'  }}></GitHubIcon>
              </a>
              </FadeIn>   
              <FadeIn delay={`400ms`}>
              <a href="https://www.linkedin.com/in/rosanne-zhu">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </a>
              </FadeIn>   
            </div>  
          </div>
        </div>
        <form className="connect-form" ref={form} onSubmit={sendEmail} style={{zIndex:'2'}}>
          <FadeIn delay={`500ms`}>
            <div className='name-div'>
              <input
                className='name-input'
                type="text"
                id="name"
                name="name" 
                placeholder='Name'
                required 
              />
              <div className='error'>{errors.name?.message}</div>
            </div>

            <div className='email-div'>
              <input
                className='email-input'
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                required 
              />
              <div className='error'>{errors.email?.message}</div>
            </div>

            <div className='message-div'>
              <textarea
                className='message-input'
                id="message"
                name="message"
                placeholder='Message'
                cols={40}
                rows={10}
                required 
              />
              <div className='error'>{errors.message?.message}</div>
            </div>
            
            <button className='connect-button' type="submit">Connect</button>
            <p className='success'>
              {successMessage && 
              <p style={{ fontSize: '15px', fontFamily:'Karla', letterSpacing:'0.5px' }}>{successMessage}</p>}
            </p>
            </FadeIn>   
          </form>      
      </div>
    </footer>
  )
}

export default Footer;
