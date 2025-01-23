import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send"; // Import the Send icon from Material UI

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback("");
      }, 30000); // Hide feedback after 30 seconds
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errorVisible && value) {
      setErrorVisible(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorVisible(false);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact p-6">
      <h1 className="text-4xl font-bold mb-10 relative">
        Contact Me
        <span className="absolute left-0 bottom-[-14px] w-16 h-1.5 bg-yellow-600 rounded"></span>
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
          {/* Name and Email */}
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-lg font-medium mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-yellow-600 mb-6"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-lg font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="p-3 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-yellow-600 mb-6"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="p-3 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-yellow-600 w-full h-40 resize-none"
          />
        </div>

        {/* Align button to the far right */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center px-6 py-3 text-white rounded-2xl ${
              isSending ? "bg-gray-400" : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            {isSending ? (
              <span>Sending...</span>
            ) : (
              <>
                <span className="mr-2">Send Message</span>
                <SendIcon />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Feedback Message */}
      {feedback && (
        <p
          className={`mt-4 text-lg ${
            feedback === "Message sent successfully!"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}

      {/* Error message that vanishes after 30 seconds */}
      {errorVisible && feedback === "" && (
        <p className="mt-4 text-lg text-red-600">
          Failed to send message. Please try again.
        </p>
      )}
    </div>
  );
};

export default Contact;
