import React, { useState } from 'react';
import { string, z }  from "zod";
import FadeIn from "../components/FadeIn";
import '../styles/Footer.css';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  const { register, handleSubmit, formState, reset  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { errors } = formState;

  const [successMessage, setSuccessMessage] = useState('');

  const handleSave: SubmitHandler<FormValues> = (formValues) => {
    onSave(formValues);
    reset();
    setSuccessMessage('Message submitted!');
  }

  return (
    <footer className='foot' id='footer'>
      <div className='footer-container'>
        <div className='footer-text'>
          <div className='footer-title'>
          <FadeIn>
            <p>LET'S BUILD SOMETHING CREATIVE.</p>
            <p style={{lineHeight:'1.3'}}>Have a question? Want to chat? <br/> Feel free to send me a message.</p> 
            <p style={{paddingTop:'230px'}}>Resume is available upon request.</p>
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
        <form className="connect-form" onSubmit={handleSubmit(handleSave)}>
          <FadeIn delay={`500ms`}>
            <div className='name-div'>
              <input
                className='name-input'
                placeholder='Name'
                {...register('name')}
              />
              <div className='error'>{errors.name?.message}</div>
            </div>

            <div className='email-div'>
              <input
                className='email-input'
                placeholder='Email'
                {...register('email')}
              />
              <div className='error'>{errors.email?.message}</div>
            </div>

            <div className='message-div'>
              <textarea
                className='message-input'
                placeholder='Message'
                cols={40}
                rows={8}
                {...register('message')}
              />
              <div className='error'>{errors.message?.message}</div>
            </div>
            
            <button className='connect-button' type="submit">Connect</button>
            <p className='success'>{successMessage && <p>{successMessage}</p>}</p>
            </FadeIn>   
          </form>      
      </div>
    </footer>
  )
}

export default Footer;
