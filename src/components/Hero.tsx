const Hero = () => (
  <div className="bg-gradient-to-r from-blue-900 via-cyan-500 to-green-300 text-white px-6 py-6 text-left flex flex-row items-center justify-between min-h-screen">
    <div className="flex-1 justify-center w-full md:w-1/2 mx-12">
      <h1 className="text-4xl font-bold mb-4">AWS Skill Builder</h1>
      <p className="text-2xl mb-6">
        Learn from AWS experts and build in-demand cloud skills your way
      </p>
      <p className="text-sm mb-6">
        Advance your professional goals with access to 600+ free trainings,
        prepare for your certification exam, and gain hands-on skills with lab
        experiences, generative AI-powered simulations, and instructor-driven
        digital courses.
      </p>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center w-full md:w-1/2 mx-12">
      <div className="bg-white text-black  inline-block rounded-lg shadow-md text-center pt-6">
        <h2 className="text-lg font-bold">Individual Subscription</h2>
        <p className="text-3xl font-bold mt-2">
          $29<span className="text-sm">/month</span>
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
          Subscribe now
        </button>
        <div className="bg-gray-900 text-white p-4 mt-4 ">
          Build cloud skills at scale with a Team subscription
        </div>
      </div>
    </div>
  </div>
);
export default Hero;
