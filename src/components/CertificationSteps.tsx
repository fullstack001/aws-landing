const CertificationSteps = () => (
  <div className="bg-gray-900 text-white py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-8">How to prepare for an AWS Certification Exam</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {["Get to know the exam", "Refresh your AWS knowledge", "Practice", "Assess your readiness"].map((step, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded">
          <p className="font-semibold">{`Step ${i + 1}: ${step}`}</p>
        </div>
      ))}
    </div>
  </div>
)
export default CertificationSteps;