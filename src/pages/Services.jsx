const Services = () => {
  const services = [
    { title: "FullStack Development", desc: "Modern responsive websites with modern technologies scalable projects" },
    { title: "UI/UX Design", desc: "Beautiful, user-friendly interfaces that convert." },

  ];

  return (
    <div className="my-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((srv, i) => (
          <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl text-yellow-400 mb-2">{srv.title}</h3>
            <p className="text-gray-400">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
