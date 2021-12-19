import './Contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_j80p3hk', 
            'template_saq43r9', 
            formRef.current, 
            'user_TdGSKIUulSUA3X2jumGFY')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Contact info
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +30 699999999
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            maria.traga@outlook.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            Athens, Greece
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        Get in touch! 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="text" placeholder="Subject" name="user_subject" required/>
                        <input type="email" placeholder="Email" name="user_email" required/>
                        <textarea rows="5" placeholder="Message" name="user_message" required/>
                        <button>SUBMIT</button>
                        {done && "Thank you for contacting me."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;