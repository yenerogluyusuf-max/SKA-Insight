import React from 'react';
import { ArrowRightIcon, SparklesIcon } from './Icons';
import AnimatedWrapper from './AnimatedWrapper';

const ContactForm = ({ 
  t, 
  formData, 
  formStatus, 
  handleInputChange, 
  handleFormSubmit, 
  onGenerateInsight, 
  isGenerating, 
  geminiInsight 
}) => (
  <AnimatedWrapper>
    <div className="rounded-3xl border border-blue-800 p-8 md:p-12 bg-blue-950">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {t.contact.title}
      </h2>
      <p className="mt-4 text-blue-200">{t.contact.text}</p>
      
      <form className="mt-8 grid gap-6" onSubmit={handleFormSubmit}>
        {formStatus === 'success' && (
          <div className="rounded-xl bg-green-500/20 text-green-300 p-4 text-sm font-medium" role="alert">
            {t.contact.success}
          </div>
        )}
        {formStatus === 'error' && (
          <div className="rounded-xl bg-red-500/20 text-red-300 p-4 text-sm font-medium" role="alert">
            {t.contact.error}
          </div>
        )}
        
        <div className={formStatus === 'success' ? 'hidden' : 'grid gap-6'}>
          <div>
            <label htmlFor="name" className="sr-only">
              {t.contact.labels.name}
            </label>
            <input 
              id="name"
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
              placeholder={t.contact.labels.name} 
              className="w-full px-4 py-3 rounded-xl border border-blue-700 bg-blue-900 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200" 
              aria-describedby="name-error"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="sr-only">
              {t.contact.labels.email}
            </label>
            <input 
              id="email"
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              placeholder={t.contact.labels.email} 
              className="w-full px-4 py-3 rounded-xl border border-blue-700 bg-blue-900 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200" 
              aria-describedby="email-error"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="sr-only">
              {t.contact.labels.message}
            </label>
            <textarea 
              id="message"
              name="message" 
              rows={5} 
              value={formData.message} 
              onChange={handleInputChange} 
              required 
              placeholder={t.contact.labels.message} 
              className="w-full px-4 py-3 rounded-xl border border-blue-700 bg-blue-900 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-vertical" 
              aria-describedby="message-error"
            />
          </div>


          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-blue-800 pt-6">
            <button 
              type="submit" 
              disabled={formStatus === 'sending'} 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-950 text-sm font-semibold hover:bg-gray-200 transition-colors disabled:bg-slate-400 group focus:outline-none focus:ring-2 focus:ring-white"
            >
              {formStatus === 'sending' ? t.contact.labels.sending : t.contact.labels.send}
              {formStatus !== 'sending' && <ArrowRightIcon/>}
            </button>
            <div className="text-sm text-blue-400">{t.contact.meta}</div>
          </div>
        </div>
      </form>
    </div>
  </AnimatedWrapper>
);

export default ContactForm;
