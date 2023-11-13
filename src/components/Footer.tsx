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
// import styled from '@emotion/styled';

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
          if (form.current) {
            form.current.reset(); // Reset the form after the message is sent
          }
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
      {/* <GradientCircle style={{ marginTop: '80px',marginLeft: '-60%', background: '#AFFAFF', height: '35%', animationDelay: '1s' }} />
      <GradientCircle style={{ marginTop: '150px', marginLeft: '-30%', background: '#FFBBBB', animationDelay: '3s' }} />
      <GradientCircle style={{ marginTop: '200px', marginLeft: '-40%', animationDelay: '0.5s' }} /> */}

      <div className='footer-container'>
        <div className='footer-text' style={{zIndex:'2'}}>
          <div className='footer-title'>
          <FadeIn>
            <p>Let's build something <span style={{fontStyle:'italic'}}>creative.</span></p>
            <p style={{lineHeight:'1.3', paddingTop:'15px'}}>Have a question? Want to chat? <br/> Feel free to send me a message.</p> 
            <p style={{paddingTop:'70px'}}>Resume is available upon request.</p>
            <div className="horizontal-divider" style={{marginTop:'40px', width:"460px"}}></div>
            <p style={{marginTop:'15px'}}>This website is built and designed by myself.</p>
          </FadeIn>   
        </div>
          <div>
            <div className="links-container" style={{color:'white'}}>
              <FadeIn delay={`200ms`}>
              <a href="mailto:rosannezhu@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20, marginRight: '5px'  }}></EmailRoundedIcon>
              </a>
              <a href="https://github.com/roskzhu">
                <GitHubIcon style={{ fontSize: 19, marginRight: '5px'  }}></GitHubIcon>
              </a>
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
            <p className='success' style={{ color: 'white' }}>
              {successMessage && 
              <p style={{ color: 'white', fontSize: '15px', fontFamily:'Karla', letterSpacing:'1px' }}>{successMessage}</p>}
            </p>
            </FadeIn>   
          </form>      
      </div>
    </footer>
  )
}



// const GradientCircle = styled.div`
//   width: 20%;
//   height: 30%;
//   transform: rotate(-0.167deg);
//   flex-shrink: 0;
//   border-radius: 316.616px;
//   background: #FFD177;
//   filter: blur(200px);
//   margin-top: 10%;
//   margin-left: 0%;
//   margin-right: 0%;
//   position: absolute;
//   z-index: 0;
//   animation: rotate 12s linear infinite;

//   background-size: 200% 200%;

//   @keyframes rotate {
//     0% {
//       opacity: 60%    
//     }
//     25% {
//       opacity: 90%;
//     }
//     50% {
//       opacity: 110%;
//     }
//     75% {
//       opacity: 70%;
//     }
//     100% {
//       opacity: 40%
//     }
//   }
// `;


export default Footer;
