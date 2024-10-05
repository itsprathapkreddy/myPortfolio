import './contact.css';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [fromName, setFromName] = useState('');

    const onClickSendMail = (e) => {
        e.preventDefault();
        sendEmailToEmailJs({
            message,
            fromEmail,
            fromName
        });
    };

    return (
        <Container fluid className="contactCont scrollItem">
            <Container>
                <div className="separator">
                    <h2>Get In Touch</h2>
                </div>
                <section className="">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <form className="space-y-8" onSubmit={onClickSendMail}>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder={'name'}
                                    required
                                    value={fromName}
                                    onChange={(e) => setFromName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@email.com"
                                    required
                                    value={fromEmail}
                                    onChange={(e) => setFromEmail(e.target.value)}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Send message
                            </Button>
                        </form>
                    </div>
                </section>
            </Container>
        </Container>
    );
};

export default Contact;
