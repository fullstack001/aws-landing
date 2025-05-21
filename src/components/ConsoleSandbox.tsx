const ConsoleSandbox = () => (
  <div className="bg-teal-900 text-white py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-6">Build practical skills in an AWS Management Console sandbox</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
      {[
        ["Guided, fun career development", "Explore game-based learning"],
        ["Get the depth of classroom training", "Explore AWS Digital Classroom"],
        ["Learn and build, step-by-step", "Explore AWS Builder Labs"],
        ["Assess your building expertise", "Explore AWS Jam"]
      ].map(([title, action], i) => (
        <div key={i} className="bg-white text-black p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <button className="text-blue-700 font-semibold mt-2">{action}</button>
        </div>
      ))}
    </div>
  </div>
)
export default ConsoleSandbox;