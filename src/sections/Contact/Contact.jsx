import styles from './Contact.module.css'
import { useState } from 'react';

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xjkbnqrd", {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept:' 'application/json',
                },
            });

            if (response.ok) {
                form.reset();
                setIsSubmitted(true);
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting this form:', error);
        }
    };

  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="name" hidden>Name</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='name'
                required 
                />
            </div>            
            <div className='formGroup'>
                <label htmlFor="email" hidden>Email</label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder='Email'
                required 
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>Message</label>
                <textarea 
                name="message" 
                id="message" 
                placeholder='Message'
                required 
                ></textarea>
            </div>
            <input 
                className="hover btn"
                type="submit" 
                value="Submit"
            />
        </form>
    </section>
  )
}

export default Contact