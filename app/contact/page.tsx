"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaPaperPlane } from "react-icons/fa6";
import { motion } from "motion/react";
import Swal from "sweetalert2";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   });

  //   if (response.ok) {
  //     setStatus("Message sent successfully!");
  //   } else {
  //     setStatus("Failed to send message.");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading modal
    Swal.fire({
      title: "Sending...",
      text: "Please wait while your message is being sent.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent 🎉",
          text: "Thanks for reaching out! I'll get back to you soon.",
          confirmButtonColor: "#2563eb",
        });
        setForm({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to send your message. Check your internet connection.",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div className="pt-8 h-screen">
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Let&apos;s Work Together
      </motion.h1>

      <motion.p
        className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Looking for a passionate <strong>Frontend Developer</strong> who can
        craft clean, responsive, and user-friendly web applications?
      </motion.p>
      <motion.p
        className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Whether it’s freelance work, collaboration, or a full-time role —
        I&apos;d love to hear from you!
      </motion.p>
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-12 px-6">
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-1/2 hidden lg:block px-8 py-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
            <p className="mb-4">
              <strong>Address:</strong>
              <br />
              Al-Jiyad Street, Al Fayha District,
              <br />
              Riyadh, Saudi Arabia
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>
              <br />
              +966 53 841 8406
            </p>
            <p className="mb-4">
              <strong>Email:</strong>
              <br />
              talha_mughalz@hotmail.com
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/share/1PoTqxTLgu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-blue-600 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>
                {/* <Link
                  href="https://www.instagram.com/technyon?igsh=Mmk2eGdmaXB4dHRj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-rose-600 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaInstagram className="text-2xl" />
                </Link> */}
                {/* <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-yellow-600 bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaSnapchat className="text-2xl" />
                </Link> */}
                {/* <Link
                  href="https://vt.tiktok.com/ZNdAujAY3/?page=TikTokShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-gray-900 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaTiktok className="text-2xl" />
                </Link> */}
              </div>
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="w-full mt-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4 h-[200px]"
                />

                <button
                  type="submit"
                  className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-md shadow-md hover:bg-blue-950 transition mx-auto cursor-pointer"
                >
                  Send Message
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
