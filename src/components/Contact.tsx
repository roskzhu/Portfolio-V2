import React, { useState, useRef, FormEvent } from 'react';
import { string, z }  from "zod";
import FadeIn from "./FadeIn";
import '../styles/Contact.css';
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

const Contact: React.FC<{ onSave: (formValues: FormValues) => void, user?: any }> = ({ onSave, user = {} }) => {
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
    <div className='foot' id='contact'>
      <div className='contact-container'>
        <h1>
          <span style={{fontWeight:'500'}}>
            Let's build something {" "}
          </span>
          <span style={{fontWeight:'bold'}}>
            impactful.
            </span>
          </h1>

        <div className='contact-information' style={{zIndex:'2'}}>
        {/* <div className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"> */}

        <div>
        <p style={{lineHeight:'1.3', paddingBottom:'25px'}}>Have a question? Want to chat? <br/> Feel free to send me a message.</p> 
        {/* <div className="col-span-4"> */}
        {/* <form className="connect-form" ref={form} onSubmit={sendEmail} style={{zIndex:'2'}}> */}
        <form className="mt-10 font-grotesk col-span-4 inline-block" 
              ref={form} onSubmit={sendEmail} style={{zIndex:'2'}}>
          {/* <FadeIn delay={`500ms`}> */}
            <div style={{display: 'flex', width: '50vw', justifyContent: 'space-between'}}>
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
            </div>
            <div className='message-div'>
              <textarea
                className='message-input'
                id="message"
                name="message"
                placeholder='Message'
                // cols={40}
                // rows={6}
                required 
              />
              <div className='error'>{errors.message?.message}</div>
            </div>
            
            <button className='connect-button' type="submit">Connect</button>
            <p className='success'>
              {successMessage && 
              <p style={{ fontSize: '15px', fontFamily:'Karla', letterSpacing:'0.5px' }}>{successMessage}</p>}
            </p>
            {/* </FadeIn>    */}
          </form>      
          </div>
          {/* <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1 pl-5"> */}
          <div className="contact-text">
            <div className="space-y-3 ">
              <h4 className="text-body-1 2xl:text-4xl font-semibold">
                Contact Details
              </h4>
          <FadeIn>
            <FadeIn delay={`200ms`}>
              <div style={{display:'flex'}}>
                <a href="mailto:rosannezhu@gmail.com">
                  <EmailRoundedIcon style={{ fontSize: 18, marginRight: '20px', paddingTop:'3px' }}></EmailRoundedIcon>
                  <p>rosannezhu@gmail.com</p>
                </a> 
              </div>
              <p >Resume is available upon request.</p>
            </FadeIn> 
          </FadeIn>   
          <div style={{height:'100px'}}></div>
          <h4 className="text-body-1 2xl:text-4xl font-semibold">
            My Digital Spaces.
          </h4>
          <div>
            <div >
  
              <FadeIn delay={`300ms`}>
              <div style={{display:'flex'}}>
              <a href="https://github.com/roskzhu">
                <GitHubIcon style={{ fontSize: 17, marginRight: '20px', paddingTop:'3px' }}></GitHubIcon>
                <p>Github</p>
              </a>
              </div>

              </FadeIn>   
              <FadeIn delay={`400ms`}>
              <div style={{display:'flex'}}>
              <a href="https://www.linkedin.com/in/rosanne-zhu">
                <LinkedInIcon style={{ fontSize: 20, marginRight: '20px', paddingTop:'3px' }}></LinkedInIcon>
                <p>LinkedIn</p>
                </a> 
                
              </div>
              </FadeIn>   
            </div>  
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
