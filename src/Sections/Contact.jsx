import emailjs from "emailjs-com";
import { RiGithubFill, RiLinkedinBoxFill, RiSendPlaneFill, RiMediumFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';
import { SOCIAL_LINKS, CONTACT_EMAIL, LOCATION, PHONE, WHATSAPP_URL } from '../constants/links';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Thank you for reaching out! I will get back to you soon.',
                });
                e.target.reset();
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Something went wrong. Please try again later.',
                });
            });
    };

    return (
        <section id="Contacts" className="bg-gray-900 text-white py-12 px-6 my-12 rounded-lg">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-6 pl-6">
                    <h2 className="text-4xl font-bold pt-2">Get in Touch</h2>
                    <p className="text-gray-400">
                        Open to new opportunities, collaborations, or just a technical conversation.
                        Feel free to reach out through this form or connect on my socials.
                    </p>

                    <div className="space-y-3">
                        <a href={`mailto:${CONTACT_EMAIL}`}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <FaEnvelope className="text-xl" />
                            <span>{CONTACT_EMAIL}</span>
                        </a>
                        <a href={`tel:${PHONE.replace(/\s/g, '')}`}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <FaPhoneAlt className="text-xl" />
                            <span>{PHONE}</span>
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                            className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
                            <FaWhatsapp className="text-xl" />
                            <span>WhatsApp</span>
                        </a>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <FaMapMarkerAlt className="text-xl" />
                            <span>{LOCATION}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <RiGithubFill className="text-2xl" />
                            <span>GitHub</span>
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <RiLinkedinBoxFill className="text-2xl" />
                            <span>LinkedIn</span>
                        </a>
                        <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer"
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <SiLeetcode className="text-xl" />
                            <span>LeetCode</span>
                        </a>
                        <a href={SOCIAL_LINKS.medium} target="_blank" rel="noreferrer"
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                            <RiMediumFill className="text-2xl" />
                            <span>Medium</span>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 space-y-6 shadow-lg">
                    <label className="block">
                        <span className="text-gray-400 text-sm">Full Name</span>
                        <input type="text" name="name" required
                            className="w-full p-3 mt-1 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name" />
                    </label>
                    <label className="block">
                        <span className="text-gray-400 text-sm">Email Address</span>
                        <input type="email" name="email" required
                            className="w-full p-3 mt-1 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your@email.com" />
                    </label>
                    <label className="block">
                        <span className="text-gray-400 text-sm">Message</span>
                        <textarea name="message" rows="4" required
                            className="w-full p-3 mt-1 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your message..."></textarea>
                    </label>
                    <button type="submit"
                        className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors duration-300">
                        <RiSendPlaneFill /> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
