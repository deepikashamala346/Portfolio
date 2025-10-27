import React, { useState, useRef } from "react";
import Section from "./Section";

const Contact: React.FC = () => {
  // State for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Ref for hidden form
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fill hidden form inputs before submit
    if (hiddenFormRef.current) {
      const hiddenForm = hiddenFormRef.current;

      hiddenForm.submit(); // <-- triggers the actual email send
    }

    // Optionally reset state & show alert
    setName("");
    setEmail("");
    setMessage("");

    alert("Thank you for your message!");
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-lg mb-8 text-light-onBackground/80 dark:text-dark-onBackground/80 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out to me!
        </p>
        <form
          method="POST"
          action="https://formsubmit.co/deepikashamala346@gmail.com"
          className="hidden"
          ref={hiddenFormRef}
        >
          <input
            type="hidden"
            name="_subject"
            value="🚀 New Collaboration Request - Deepika Shamala's Portfolio"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! I'll get back to you soon."
          />
          <input
            type="hidden"
            name=""
            value="Dear Deepika, you have received a new form submission from your portfolio site."
          />
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="message" value={message} />
        </form>

        {/* Visible Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            Send Message
          </button>
        </form>

        <div
          className="mt-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="/images/Deepika_Shamala_Resume.pdf"
            download
            className="inline-block bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
