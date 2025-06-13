const originalPort = process.env.REACT_APP_ORIGINAL_PORT;

const Hero = () => {
  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  };

  const email = getCookie("email");

  const purchaseIndividual = () => {
    if (email) {
      window.open(`${originalPort}/individual-payment?from=brand`, "_blank");
    } else {
      window.open(`${originalPort}/login`);
    }
  };
  return (
    <div className="bg-gradient-to-r from-blue-900 via-cyan-500 to-green-300 text-white px-6 text-left flex flex-row items-center justify-between py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
        <div className="flex-1 justify-center mx-12 ">
          <h1 className="text-4xl font-bold mb-4">
            Learn from Landing Page Experts to build interactive pages your way.
          </h1>
          <p className="text-2xl ">
            Startups and mid-size businesses can first learn the proven methods
            to attract your clients based on your unique business model and
            private goals and objectives. Includes 10+ tutorials and videos.
            Latest in social media marketing tools and how to use accelerated
            intelligence to write content.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center mx-12">
          <div className="bg-white text-black  inline-block rounded-lg shadow-md text-center pt-6">
            <h2 className="text-lg font-bold">Individual Subscription</h2>
            <p className="text-3xl font-bold mt-2">
              $29<span className="text-sm">/month</span>
            </p>
            <button
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
              onClick={purchaseIndividual}
            >
              Subscribe now
            </button>
            <div className="bg-gray-900 text-white p-4 mt-4 ">
              Build a single product/service and market it directly to your
              clients. You own it completely and can make modifications for
              different campaigns and purposes in your totally private, branded,
              and secure platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
