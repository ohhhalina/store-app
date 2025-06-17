import React, {useRef} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_app', //тут servise
      'template_h6dgep8', //тут template
      form.current,
      'Z7YvmC2urJfo3hc9P'
    )
    .then((result) => {
      alert('send');
      form.current.reset();
    }, (error) => {
      alert('error send' + error.text);
    });
  };
  
  return (
    <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form-container">
            <input type="email" name="user_email" placeholder='yourmail@gmail.com' required />
            <button type="submit" className="secondary-button">Submit</button>
        </form>
        </div>
  )
}

export default Contact
