import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, AlertCircle, CheckCircle } from "lucide-react";

// Initialize EmailJS with your Public Key
// Get your credentials from: https://dashboard.emailjs.com/
// Add to .env.local:
// VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
// VITE_EMAILJS_SERVICE_ID=your_service_id_here
// VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
      setStatusMessage("Please fill in all fields");
      setStatusType("error");
      return;
    }

    // Check for required environment variables
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
      setStatusMessage("Email service is not configured. Please contact the site owner.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setStatusType("success");
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatusMessage("Failed to send message. Please try again or email me directly.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={formVariants}
      className="rounded-3xl border border-[#D4A5A5]/20 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-[#D4A5A5]" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A5A5]">
              Get in touch
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#F9FAFB]">
            Send me a message
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="from_name" className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-[#D4A5A5]/20 bg-white/5 text-[#F9FAFB] placeholder-[#D1D5DB]/50 transition-colors duration-200 focus:border-[#D4A5A5]/50 focus:bg-white/10 focus:outline-none disabled:opacity-50"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label htmlFor="from_email" className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="your.email@domain.com"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-[#D4A5A5]/20 bg-white/5 text-[#F9FAFB] placeholder-[#D1D5DB]/50 transition-colors duration-200 focus:border-[#D4A5A5]/50 focus:bg-white/10 focus:outline-none disabled:opacity-50"
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-[#D4A5A5]/20 bg-white/5 text-[#F9FAFB] placeholder-[#D1D5DB]/50 transition-colors duration-200 focus:border-[#D4A5A5]/50 focus:bg-white/10 focus:outline-none disabled:opacity-50"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more..."
              disabled={loading}
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-[#D4A5A5]/20 bg-white/5 text-[#F9FAFB] placeholder-[#D1D5DB]/50 transition-colors duration-200 focus:border-[#D4A5A5]/50 focus:bg-white/10 focus:outline-none resize-none disabled:opacity-50"
            />
          </motion.div>

          {/* Status Message */}
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-start gap-3 rounded-lg p-4 ${
                statusType === "success"
                  ? "border border-[#D4A5A5]/30 bg-[#D4A5A5]/10"
                  : "border border-red-500/30 bg-red-500/10"
              }`}
            >
              {statusType === "success" ? (
                <CheckCircle size={20} className="text-[#D4A5A5] shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
              )}
              <p
                className={`text-sm ${
                  statusType === "success" ? "text-[#D4A5A5]" : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={!loading ? { scale: 1.04 } : {}}
            whileTap={!loading ? { scale: 0.97 } : {}}
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-[#EBCACA]/20 bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] px-6 py-4 font-semibold text-[#030712] shadow-lg shadow-[#D4A5A5]/20 transition-all duration-300 hover:shadow-[#D4A5A5]/35 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 border-2 border-[#030712]/30 border-t-[#030712] rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Mail size={20} />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
