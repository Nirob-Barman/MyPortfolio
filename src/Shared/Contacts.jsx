import React, { useState } from 'react';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
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
