const Testimonials = () => (
  <div className="bg-gray-100 py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-6">What our learners say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        "I used AWS Skill Builder to explore AWS services and achieve my AWS Machine Learning Specialty Certification.",
        "The combination of guided learning and labs makes it easier to apply skills in real projects.",
        "AWS Skill Builder helped me realize that the investment is relevant and up-to-date."
      ].map((quote, i) => (
        <div key={i} className="bg-white p-6 shadow rounded text-sm">{quote}</div>
      ))}
    </div>
  </div>
)
export default Testimonials;