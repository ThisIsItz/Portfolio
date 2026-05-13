import { Loader2, Mail, Send } from 'lucide-react'
import { ContactItem } from '@/components/ContactItem'
import { ContactFormField } from '@/components/ContactFormField'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) {
      return
    }

    const cleanData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    }

    if (!cleanData.name || !cleanData.email || !cleanData.message) {
      toast({
        title: 'Please complete all fields',
        description: 'Name, email, and message are required.',
        variant: 'destructive'
      })
      return
    }

    const previousFormData = { ...formData }
    setFormData({ name: '', email: '', message: '' })
    setIsLoading(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.'
        )
      }

      const templateParams = {
        ...cleanData,
        time: new Date().toLocaleString('en-GB', {
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon."
      })
    } catch (error) {
      setFormData(previousFormData)
      if (import.meta.env.DEV) {
        console.error('EmailJS send failed:', error)
      }
      toast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive'
      })
      return
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together or discussing a potential opportunity?
          I'd love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem
                icon={Mail}
                label="Email"
                value="itziarurbieta94@gmail.com"
                href="mailto:itziarurbieta94@gmail.com"
              />
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 ">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/itziarurbieta"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center rounded-md border border-foreground/20 p-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/thisisitz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center rounded-md border border-foreground/20 p-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <ContactFormField
                id="name"
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                required
                disabled={isLoading}
              />
              <ContactFormField
                id="email"
                name="email"
                label="Your Email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                required
                disabled={isLoading}
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your message here..."
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none',
                  isLoading && 'scale-[0.99]'
                )}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
