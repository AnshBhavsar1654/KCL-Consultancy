
import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // In a real application, you would send this data to your server
  };


  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-10">
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading 
            title="Contact Us"
            subtitle="Get in touch with our team to discuss how we can help"
          />
          
         <div className="flex justify-center mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full max-w-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-kcl-blue/10 text-kcl-blue mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600">connect@kalliope.in</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full max-w-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-kcl-blue/10 text-kcl-blue mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <p className="text-gray-600">4th Floor,West Gate, Ahmedabad</p>
            </div>
          </div>
          
          <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">Thank You!</h4>
                  <p className="text-green-600">
                    Your message has been submitted successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kcl-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kcl-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kcl-blue focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Services Information">Services Information</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Career Information">Career Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kcl-blue focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-6">
                  We're always looking to connect with organizations and individuals who share our commitment to excellence in governance and policy development.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">How We Can Help</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className='text-gray-700'>Discuss your specific governance challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className='text-gray-700'>Explore potential collaborations and partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className='text-gray-700'>Learn more about our services and expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className='text-gray-700'>Inquire about career opportunities at KCL</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  Whether you're a government agency, private enterprise, non-profit organization, or interested individual, we'd love to hear from you and explore how we can work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
