import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Map subject values to text for email subject
    const subjectMap: Record<string, string> = {
      lecture: t.contact.optLecture,
      advisory: t.contact.optAdvisory,
      media: t.contact.optMedia,
      other: t.contact.optOther
    };
    
    const subjectText = subjectMap[formData.subject] || 'Inquiry';
    
    // Construct email body
    const bodyText = `${t.contact.labelName}: ${formData.name}\n${t.contact.labelEmail}: ${formData.email}\n\n${t.contact.labelMsg}:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:hiu2001@empal.com?subject=${encodeURIComponent(`[Homepage] ${subjectText} - ${formData.name}`)}&body=${encodeURIComponent(bodyText)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert(t.contact.alertClient);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif-kr text-4xl font-bold text-[#4A5568] mb-4">{t.contact.headerTitle}</h1>
          <p className="text-xl text-[#006D77] font-medium mb-6">{t.contact.headerSubtitle}</p>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t.contact.headerDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Col: Info */}
          <div className="space-y-8">
            {/* Patient Care */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#006D77]">
              <h3 className="font-serif-kr text-2xl font-bold text-gray-800 mb-6">{t.contact.patientTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#006D77] mt-1 mr-4" />
                  <div>
                    <strong className="block text-gray-900">{t.contact.addressTitle}</strong>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <Phone className="w-6 h-6 text-[#006D77] mt-1 mr-4" />
                   <div>
                     <strong className="block text-gray-900">{t.contact.centerTitle}</strong>
                     <p className="text-gray-600">1588-5700</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <Clock className="w-6 h-6 text-[#006D77] mt-1 mr-4" />
                   <div>
                     <strong className="block text-gray-900">{t.contact.hoursTitle}</strong>
                     <p className="text-gray-600">{t.contact.hours}</p>
                   </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 text-red-700 text-sm rounded-md">
                   {t.contact.emergency}
                </div>

                <a 
                  href="http://www.snuh.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-6 bg-[#006D77] text-white py-3 rounded hover:bg-teal-800 transition-colors font-bold"
                >
                  {t.contact.btnBook}
                </a>
              </div>
            </div>

            {/* Business Inquiries Info */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-400">
              <h3 className="font-serif-kr text-2xl font-bold text-gray-800 mb-4">{t.contact.businessTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.contact.businessDesc}
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Mail className="w-5 h-5 mr-3 text-gray-500" />
                <a href="mailto:hiu2001@empal.com" className="hover:text-[#006D77] transition-colors">
                  hiu2001@empal.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Col: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-serif-kr text-2xl font-bold text-gray-800 mb-6">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labelName}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006D77] focus:border-[#006D77] outline-none transition-colors"
                  placeholder={t.contact.phName}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labelEmail}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006D77] focus:border-[#006D77] outline-none transition-colors"
                  placeholder={t.contact.phEmail}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labelPurpose}</label>
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006D77] focus:border-[#006D77] outline-none transition-colors"
                >
                  <option value="">{t.contact.optSelect}</option>
                  <option value="lecture">{t.contact.optLecture}</option>
                  <option value="advisory">{t.contact.optAdvisory}</option>
                  <option value="media">{t.contact.optMedia}</option>
                  <option value="other">{t.contact.optOther}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labelMsg}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006D77] focus:border-[#006D77] outline-none transition-colors resize-none"
                  placeholder={t.contact.phMsg}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A5568] text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors shadow-md"
              >
                {t.contact.btnSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
