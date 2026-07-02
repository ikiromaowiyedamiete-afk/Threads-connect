import BackToHomeButton from "../components/common/BackToHomeButton";

function Contact() {
    return (
        <div className="min-h-screen px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="max-w-6xl mx-auto">
                        Contact Us 
                    </h1>
                    <p className="text-gray-600">
                        Have questions or want to connect with a tailor? Send us a message. 
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Form */}
                    <div className="bg-gray-100 p-8 rounded-xl shadow">
                        <h2 className="text-2xl font-semibold mb-6">
                            Send Message 
                        </h2>

                        <form className="space-y-5">

                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border outline-none" />
                            <input type="text" placeholder="Your Email" className="w-full p-3 rounded-lg border outline-none" />

                            <textarea 
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg border outline-none"></textarea>

                            <button className="bg-amber-700 text-white px-6 py-3 rounded-lg w-full hover:bg-amber-800 transition">
                                Send Message 
                            </button>

                            </form>
                    </div>

                    {/* Contact Details */} 
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-6">
                            Get In Touch 
                        </h2>

                        <div className="space-y-5 text-gray-700">

                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p>support@threadsconnect.com</p>
                            </div>

                            <div>
                                <h3 className="font-bold">Phone</h3>
                                <p>+234 xxx xxx xxxx</p>
                            </div>


                            <div>
                                <h3 className="font-bold">Address</h3>
                                <p>Port-Harcourt, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToHomeButton />
        </div>

        
    );
}

export default Contact;