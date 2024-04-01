import emailjs from "emailjs-com";
import {
    RiFacebookFill,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiSendPlaneFill,
} from "react-icons/ri";
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS service
        emailjs.sendForm("service_q32x64o", "template_9pj3jj3", e.target, "pzo9S9jphsjeWF3PW")
            .then((result) => {
                console.log(result.text);

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                });
            })
            .catch((error) => {
                console.error(error);
                // Show error toast message
                // toast.error("Failed to send message. Please try again later.");
            });
        e.target.reset();
    };
    return (
        <section className="py-6 mb-10" id="contact">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <RiGithubFill className="w-5 h-5 mr-2 sm:mr-6" />
                            <a href="https://github.com/Nirob-Barman" target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </div>
                        <div className="flex items-center">
                            <RiLinkedinBoxFill className="w-5 h-5 mr-2 sm:mr-6" />
                            <a href="https://www.linkedin.com/in/nirob-barman/" target="_blank" rel="noreferrer">
                                Linkedin
                            </a>
                        </div>
                        <div className="flex items-center">
                            <RiFacebookFill className="w-5 h-5 mr-2 sm:mr-6" />
                            <a href="https://www.facebook.com/nirob.barman.19/" target="_blank" rel="noreferrer">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                >
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input
                            required=""
                            autoComplete="off"
                            type="text"
                            name="name"
                            className="block w-full rounded-md shadow-sm focus:ring p-2 bg-gray-300 text-black font-semibold"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input
                            required=""
                            autoComplete="off"
                            name="email"
                            className="block w-full rounded-md shadow-sm focus:ring p-2 bg-gray-300 text-black font-semibold"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea
                            rows="3"
                            className="block w-full rounded-md focus:ring p-2 bg-gray-300 text-black font-semibold"
                            name="message"
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="flex items-center self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri focus:ri hover:ri"
                    >
                        {" "}
                        <RiSendPlaneFill className="mr-2" />
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
