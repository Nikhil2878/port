const Contact = () => {
  return (
    // Comment
    <section
      id="contact"
      className="py-24 px-6 bg-[#0a0a0a] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Feel free to reach out for collaborations, freelance work,
          or any exciting opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        
        {/* Email */}
        <div
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Email
          </h3>
          <p className="text-gray-300 break-all">
            nikhilrawatnr1111@gmail.com
          </p>
          <a
            href="mailto:nikhilrawat@email.com"
            className="inline-block mt-4 text-sm text-purple-400 hover:underline"
          >
            Send Email →
          </a>
        </div>

        {/* Phone */}
        <div
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Phone
          </h3>
          <p className="text-gray-300">
            +91 9575273178
          </p>
          <a
            href="tel:+919575273178"
            className="inline-block mt-4 text-sm text-purple-400 hover:underline"
          >
            Call Now →
          </a>
        </div>

        {/* Location */}
        <div
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Location
          </h3>
          <p className="text-gray-300">
            Gwalior, Madhya Pradesh, India
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Open to Remote Opportunities
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold mb-6">
         Want To Connect With Me
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/Nikhil2878"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-700
            hover:border-purple-500 hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://in.linkedin.com/in/nikhil-rawat-47232a350"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-700
            hover:border-purple-500 hover:text-purple-400 transition"
          >
            LinkedIn
          </a>

          
           <a
            href="https://leetcode.com/u/nikhilrawat1111/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-700
            hover:border-purple-500 hover:text-purple-400 transition"
          >
            Leetcode
          </a>
           <a
            href="https://instagram.com/nikhilrawat1111?igsh=MWdob3RoNDlub2c4ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-700
            hover:border-purple-500 hover:text-purple-400 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
