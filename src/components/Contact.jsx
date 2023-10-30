import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";

const Contact = () => {
  const form = useRef();

  // Function to sanitize user input
  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Sanitize user inputs
    const userEmail = sanitizeInput(form.current.user_email.value);
    const userName = sanitizeInput(form.current.from_name.value);
    const userMessage = sanitizeInput(form.current.message.value);

    // Create a sanitized form data
    const sanitizedFormData = new FormData();
    sanitizedFormData.append("user_email", userEmail);
    sanitizedFormData.append("from_name", userName);
    sanitizedFormData.append("message", userMessage);

    emailjs
      .sendForm(
        "service_gtvrr5o",
        "template_5w8dhc3",
        form.current,
        "pi6BSJk4IMNRxNJw9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          // Show SweetAlert2 popup when the message is sent
          Swal.fire({
            title: "Message Sent",
            text: "We will reach you soon!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Reload the page after the user clicks "OK"
            window.location.reload();
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="your_email@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="from_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm text-white font-medium rounded-lg bg-gray-700 hover:bg-orange-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
