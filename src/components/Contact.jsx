const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0a0a0a] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Let’s work together! Feel free to reach out for collaborations,
          projects, or just a friendly hello.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-lg mx-auto bg-[#111] border border-gray-800 rounded-2xl p-8
        hover:border-purple-500 transition-all duration-300">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0d0d0d] text-white p-4 rounded-xl
            border border-gray-700 focus:outline-none
            focus:border-purple-500 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0d0d0d] text-white p-4 rounded-xl
            border border-gray-700 focus:outline-none
            focus:border-purple-500 transition"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-[#0d0d0d] text-white p-4 rounded-xl
            border border-gray-700 focus:outline-none
            focus:border-purple-500 transition"
          />

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-full font-medium
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:scale-[1.02]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
            transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
