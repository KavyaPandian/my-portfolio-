import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaPaperPlane,
  FaCheck,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import personal from "../../data/personal";
import socials from "../../data/socials";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    toast.success(`${type === "email" ? "Email address" : "Phone number"} copied to clipboard!`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white py-24 px-6 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white"
        >
          Get In <span className="text-cyan-600 dark:text-cyan-400">Touch</span>
        </motion.h2>

        <p className="text-slate-600 dark:text-gray-400 text-center mt-5 max-w-2xl mx-auto text-base sm:text-lg">
          Have a project in mind, an opportunity, or just want to say hello?
          Feel free to reach out to me!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
          {/* Left Column: Consolidated Contact Card & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400/40 shadow-md dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base mb-6 font-medium">
              Feel free to reach out via email or phone.
            </p>

            {/* Info Items */}
            <div className="space-y-4 text-sm sm:text-base">
              {/* Email */}
              <div className="flex items-center justify-between gap-3 text-slate-800 dark:text-gray-200">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-600 dark:text-cyan-400 text-lg shrink-0" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium text-slate-800 dark:text-gray-200"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, "email")}
                  title="Copy Email"
                  className="text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition cursor-pointer"
                >
                  {copiedType === "email" ? (
                    <FaCheck className="text-emerald-500 text-xs" />
                  ) : (
                    <FaCopy className="text-xs" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 text-slate-800 dark:text-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-emerald-600 dark:text-emerald-400 text-lg shrink-0" />
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium text-slate-800 dark:text-gray-200"
                  >
                    9344096553
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, "phone")}
                  title="Copy Phone"
                  className="text-slate-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition cursor-pointer"
                >
                  {copiedType === "phone" ? (
                    <FaCheck className="text-emerald-500 text-xs" />
                  ) : (
                    <FaCopy className="text-xs" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-slate-800 dark:text-gray-200">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-lg shrink-0" />
                <span className="font-medium text-slate-800 dark:text-gray-200">Chennai, India</span>
              </div>
            </div>

            {/* Social & Coding Platform Icon Buttons */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition duration-300"
              >
                <SiLeetcode className="text-lg" />
              </a>

              <a
                href={socials.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                title="HackerRank"
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-300"
              >
                <SiHackerrank className="text-lg" />
              </a>

              <a
                href={socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                title="CodeChef"
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition duration-300"
              >
                <SiCodechef className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400/40 shadow-md dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Hi Kavya, I'd love to talk about..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-gray-950 font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98] transition duration-300 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
