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
        <div
          className="mt-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="/images/DeepikaShamala_FullStackDev_Resume.pdf"
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
