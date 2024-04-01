import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };



    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.',
        });

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');

        // Using emailjs.sendForm to send the form data
        // emailjs.sendForm('service_8baiizn', 'template_uej5vcg', formRef.current, 'xLitHCPjqiRQz07Om')
        //     .then((result) => {
        //         if (result.text === 'OK') {
        //             console.log('Message sent successfully');
        //             // Reset form fields
        //             setName('');
        //             setEmail('');
        //             setMessage('');
        //             // Reset the form after submission
        //             e.target.reset();

        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Success!',
        //                 text: 'Your message has been sent successfully.',
        //             });
        //         }
        //     }, (error) => {
        //         console.log('Error:', error);
        //     });
    };

    return (
        <div id='Contacts' className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border-2 border-blue-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-600"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border-2 border-blue-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-600"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            className="border-2 border-blue-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-600"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
