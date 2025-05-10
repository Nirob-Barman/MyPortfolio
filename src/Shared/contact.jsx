import emailjs from "emailjs-com";
import { RiGithubFill, RiLinkedinBoxFill, RiSendPlaneFill, RiMediumFill } from "react-icons/ri";
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_b48d5fm", "template_0mmhhak", e.target, "xLitHCPjqiRQz07Om")
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Thank you for reaching out! I will get back to you soon.',
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Something went wrong. Please try again later.',
                });
            });

        e.target.reset();
    };

    return (
        <section id="Contacts" className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-6">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-400">I'd love to hear from you! Feel free to reach out through this form or connect with me on my social platforms.</p>
                    <div className="space-y-4">
                        <a href="https://github.com/Nirob-Barman" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <RiGithubFill className="text-2xl" />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <RiLinkedinBoxFill className="text-2xl" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://medium.com/@nirob-barman/" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                            <RiMediumFill className="text-2xl" />
                            <span>Medium</span>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 space-y-6 shadow-lg">
                    <label className="block">
                        <span className="text-gray-400">Full Name</span>
                        <input type="text" name="name" required className="w-full p-3 mt-2 rounded bg-gray-700 text-white" placeholder="Your Name" />
                    </label>
                    <label className="block">
                        <span className="text-gray-400">Email Address</span>
                        <input type="email" name="email" required className="w-full p-3 mt-2 rounded bg-gray-700 text-white" placeholder="Your Email" />
                    </label>
                    <label className="block">
                        <span className="text-gray-400">Message</span>
                        <textarea name="message" rows="4" required className="w-full p-3 mt-2 rounded bg-gray-700 text-white" placeholder="Your Message"></textarea>
                    </label>
                    <button type="submit" className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold flex items-center justify-center hover:bg-blue-500 transition duration-300">
                        <RiSendPlaneFill className="mr-2" />Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
