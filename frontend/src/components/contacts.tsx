import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { JSX, useState } from "react";
import { createContact, Contact } from "../api/contactApi";

const ContactSection = () => {
  const [formData, setFormData] = useState<Contact>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createContact(formData);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in Touch with Our Team</p>
        </motion.div>

        {successMessage && (
          <div className="mb-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <ContactInfo
                icon={<Phone className="h-8 w-8 text-rose-600 mr-4" />}
                title="Phone"
                details={["0704 743 180", "Available 24/7 for emergencies"]}
              />
              <ContactInfo
                icon={<Mail className="h-8 w-8 text-rose-600 mr-4" />}
                title="Email"
                details={["contact@silverrose.com", "We'll respond within 24 hours"]}
              />
              <ContactInfo
                icon={<MapPin className="h-8 w-8 text-rose-600 mr-4" />}
                title="Visit Us"
                details={[
                  "Milele Center Building,",
                  "Behind Equity Bank, Block 104,",
                  "3rd Floor, Kitengela Town.",
                ]}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <InputField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            <InputField label="Subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" />
            <TextAreaField label="Message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." />
            <button
              type="submit"
              className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center"
            >
              Send Message
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, details }: { icon: JSX.Element; title: string; details: string[] }) => (
  <div className="flex items-center p-4 bg-rose-50 rounded-lg">
    {icon}
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className={`text-gray-600 ${index === details.length - 1 ? "text-sm text-gray-500 mt-1" : ""}`}>
          {detail}
        </p>
      ))}
    </div>
  </div>
);

const InputField = ({ label, type, name, value, onChange, placeholder }: { label: string; type: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
      placeholder={placeholder}
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
      placeholder={placeholder}
    ></textarea>
  </div>
);

export default ContactSection;