import React, { useRef, useState } from 'react';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
import InputField from '../shared/InputField';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [verified, setVerified] = useState(false);
    const recaptchaRef = useRef(null);

    function isVerified(value) {
        // console.log(value)
        setVerified(!verified)
    }

    function reloadRecaptcha() {
        if (recaptchaRef.current?.reset) {
            recaptchaRef.current.reset();
            setVerified(false);
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        const message = e.target.message.value;

        const messageObj = { name, email, phone, message };

        // I have followed this tutorial, 
        // https://www.youtube.com/watch?v=dgcYOm8n8ME&t=536s
        // but customized email template with my preference & scripts are added in index.html file

        const serviceId = 'service_8hydteb';
        const templateId = 'template_0kdpxun';

        emailjs.send(serviceId, templateId, messageObj)
            .then((result) => {
                swal({
                    title: "Yahhh!!!",
                    text: "Message sent",
                    icon: "success",
                })
                setName('');
                setEmail('');
                setPhone('');
                e.target.reset()
                // grecaptcha.reset();
                reloadRecaptcha()
            })
            .catch(err => console.log(err));

    }

    return (

        <div className="bg-[#eceae380] mt-20 mx-20 p-6">
            <form className="rounded-lg p-8" onSubmit={sendEmail}>
                <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <InputField
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <InputField
                        label="Phone"
                        name="phone"
                        type="text"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold mb-1 block" htmlFor="message">
                        Message<sup>*</sup>
                    </label>
                    <textarea
                        className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                        id="message"
                        name="message"
                        type="text"
                        rows="5"
                        placeholder="Message"
                        required
                    />
                </div>

                {/* I followed this tutorial & customized onChange by myself : https://www.youtube.com/watch?v=GlJZ8Asv1-c&t=329s */}

                <ReCAPTCHA
                    sitekey="6Le01DclAAAAALjWhsRkVtnR8n7yayeCyl11kFRr"
                    ref={recaptchaRef}
                    onChange={isVerified}
                />

                <div className="text-center mt-8">
                    <button className={`btn4 py-2 px-8 ${verified == false ? "opacity-50 cursor-not-allowed" : ""}`}>
                        Send Message
                    </button>
                </div>
            </form >

        </div >
    )
}

export default ContactForm;
