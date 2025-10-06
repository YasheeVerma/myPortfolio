import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt ,FaPhone} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
const Contact=()=> {
    const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oy5l5wr",  // Replace with your EmailJS Service ID
        "template_ji0ntct",  // Replace with your EmailJS Template ID
        form.current,
        "cBPXsPxStWMhJpMdc"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:1,ease:'easeOut'}} viewport={{once:false,amount:0.2}} id='contact' className=' py-20 bg-dark-200'>
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In <span className='text-purple'> Touch </span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
               Have a project in mind or want to collaborate? Let's talk! 
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div>
          <form  ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2 '>Your Name</label>
                            <input 
              className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
              type="text" name="user_name" id="name" required />
                        </div>

                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2 '>Email Address</label>
              <input 
              className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
              type="email" name="user_email" id="email" required />
                        </div>

                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2 '>Your Message</label>
              <textarea 
              className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
              name="message" id="message" required />
                        </div>

            <button type='submit' disabled={isSent} className={`w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 ${isSent ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
             {isSent ? 'Sent' : 'Send'}
            </button>
                    </form>
                </div>
                {/* contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4 '>
                        <FaMapMarkedAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                             <p className='text-gray-400'>Indore,Madhya Pradesh</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4 '>
                        <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                             <p className='text-gray-400'>vyashee@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4 '>
                        <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                             <p className='text-gray-400'>+91 9179483501</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        <ToastContainer />
    </motion.div>
  )
}

export default Contact
