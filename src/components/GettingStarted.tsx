const GettingStarted = () => (
  <div className="bg-white py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-6">New to the AWS Cloud?</h2>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
        <h3 className="font-semibold mb-2">Start your journey here</h3>
        <p className="text-sm mb-4">Find out how to get started with AWS training.</p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Start learning</button>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
        <h3 className="font-semibold mb-2">Build practical skills</h3>
        <p className="text-sm mb-4">Practice and explore real scenarios in a safe environment.</p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Get building</button>
      </div>
      <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
        <h3 className="font-semibold mb-2">Get certified</h3>
        <p className="text-sm mb-4">Prepare for AWS Certification and validate your expertise.</p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Prepare now</button>
      </div>
    </div>
  </div>
)
export default GettingStarted;