const Testimonials = () => (
  <div
    className="py-16 px-4 text-center"
    style={{
      background:
        "linear-gradient(to right, #001220, #0070f3, #7928ca, #ff0080)",
    }}
  >
    <h2 className="text-2xl font-bold mb-6 sm:text-3xl text-white">
      What our learners say
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          quote:
            "I used BGAI single product subscription to explore the free Creative Writing Tutorials, and I learned quickly that the real copyright laws in the U.S.A. didn’t apply to AI if you use it correctly.",
          icon: "🛢️",
          author: "Darya Petrashka, Data Scientist – Schlumberger, Poland",
        },
        {
          quote:
            "The combination of guided learning and upgrade options make it easier to apply the marketing skills for real projects and product promotions",
          icon: "🏢",
          author:
            "John Diket, AWS Skill Builder subscriber – Software Engineer, Insight",
        },
        {
          quote:
          "I learned I didn’t have to cut-off my big platforms until I saw that my promotions worked with translation avatars, and the social media promotion platforms made me realize that the investment is relevant and up-to-date for my company’s needs. Mr. Musgrave’s blog on inclusive communications changed my approach to business completely.",
          icon: "🔧",
          author:
            "Ntekaniwa Paul, AWS Skill Builder subscriber – Network and Technical Support Engineer, Beem",
        },
      ].map((testimonial, i) => (
        <div
          key={i}
          className="bg-white p-6 shadow rounded text-left flex flex-col items-start"
        >
          <div className="text-4xl mb-4">{testimonial.icon}</div>
          <p className="text-sm sm:text-base mb-4">{testimonial.quote}</p>
          {/* <p className="font-bold text-sm sm:text-base">{testimonial.author}</p> */}
        </div>
      ))}
    </div>
  </div>
);
export default Testimonials;
