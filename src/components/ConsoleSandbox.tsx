const ConsoleSandbox = () => (
  <div className="bg-teal-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
      Advanced Level Professional Marketing and Delivery
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
      {[
        [
          "Best Global AI vs Big Tech: Protecting Your Brand and Data in the AI Era",
          "Read CEO and Founder James Musgrave’s blog post.",
          "https://bestglobalai.com/blog/682cb0d5ec18815ebf401871",
        ],
        [
          "Get the most of AI by having a fullstack developer Install API, test it, and match it to your unique business model.",
          "Explore BGAI API services in this blog post.",
          "https://bestglobalai.com/blog/67bb6103f8943b612a7071f9",
        ],
        [
          "Speed up your international marketing and total privacy with VPN.",
          "Explore the Virtual Private Network in this blog post.",
          "https://bestglobalai.com/blog/68067b95ec18815ebf3fe4e4",
        ],
        [
          "Sell your books or others’ books using our advanced platforms.",
          "Read this fact-filled blog post to see how your subscription can pay-off.",
          "https://bestglobalai.com/blog/68165cb3ec18815ebf400306",
        ],
      ].map(([title, action, link], i) => (
        <div
          key={i}
          className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition-shadow duration-300 relative h-[250px]"
        >
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <a
            href={link}
            className="text-blue-700 font-semibold mt-2 hover:underline absolute bottom-4 "
          >
            {action}
          </a>
        </div>
      ))}
    </div>
  </div>
);
export default ConsoleSandbox;
