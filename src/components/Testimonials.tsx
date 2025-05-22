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
            "I used AWS Skill Builder to explore AWS services and achieve the AWS Machine Learning Specialty Certification. Practice exams in AWS Skill Builder were particularly valuable and helped me feel less intimidated by the real exam. I successfully passed my exam and achieved certification.",
          icon: "🛢️",
          author: "Darya Petrashka, Data Scientist – Schlumberger, Poland",
        },
        {
          quote:
            "The combination of guided learning and labs makes it easier to apply new skills in real-life projects. Skill Builder exposed me to new concepts and served as a refresher of the knowledge I already had. I am applying these skills to support my customers every day.",
          icon: "🏢",
          author:
            "John Diket, AWS Skill Builder subscriber – Software Engineer, Insight",
        },
        {
          quote:
            "AWS Skill Builder became my go-to resource that helped me learn, validate my AWS skills, and put them into practice. The fact that these courses are created by AWS is an assurance that the material is relevant and up-to-date. I also like the fact that I can learn at my own pace.",
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
          <p className="font-bold text-sm sm:text-base">{testimonial.author}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Testimonials;
