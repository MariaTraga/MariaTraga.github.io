import './Contact.css';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { contact } from '../../ProjectData';

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
                        {contact.title}
                    </h1>
                    <div className="contact-info">
                        {contact.items.map((item) => (
                        <div key={item.id}>
                            <a href={item.link}>
                                <div className="contact-info-item">
                                    <img src={item.img} alt="" className="contact-icon" />
                                    <div className="contact-info-item-info">{item.info}</div>
                                </div>
                            </a>
                        </div>))}
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc desc-text">
                        {contact.description} 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="text" placeholder="Subject" name="user_subject" required/>
                        <input type="email" placeholder="Email" name="user_email" required/>
                        <textarea rows="5" placeholder="Message" name="user_message" required/>
                        <button className="desc-text">SUBMIT</button>

                        {done && <div className="snackbar desc-text">{contact.message}</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;