const GettingStarted = () => {
  const handleMove = () => {
    window.location.href = "https://bestglobalai.com/signup";
  };
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">
        New to Social Media Marketing?
      </h2>
      <div className="max-w-4xl mx-auto mb-8 border border-gray-300 p-4 border-rounded-xl bg-gray-100 ">
        <p className="text-lg mb-4 text-center font-bold">
          Learn before you pay plan!
        </p>
        <p className="mb-2 text-left">
          Download these two epub books that contain the lessons you'll need to
          use the Best Global AI program tools.
        </p>
        <p className="mb-2 text-left">
          <a
            href="/ebooks/Chief_Executive_Officer.epub"
            download
            className="text-blue-600  "
          >
            Download the Chief Executive Officer Lessons here.
          </a>
        </p>
        <p className="text-left mb-2">
          <a
            href="/ebooks/Enhancing_Creative_Writing.epub"
            download
            className="text-blue-600 "
          >
            Download the Enhancing Creative Writing Lessons here.
          </a>
        </p>
        <p className="text-left mb-2">
          {" "}
          To read these ePub3 books use the Thorium eReader for PC and Mac here*{" "}
          <a
            href="https://thorium.edrlab.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (link: https://thorium.edrlab.org/en/)
          </a>
        </p>

        <p className="mb-4 text-left">
          *Note: You won't be able to translate the text using the Thorium
          eReader. You can only translate when you purchase the Single Product
          Plan.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
          <h3 className="font-semibold mb-2">Start your journey at BGAI.</h3>
          <p className="text-sm mb-4">
            Subscribe to the Individual single-product package. Learn and
            practice. If you sell, then you can upgrade and/or add extras to
            your plan. Cancel at any time.
          </p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleMove}
          >
            Start learning
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
          <h3 className="font-semibold mb-2">
            Build practical skills that work to expand your reach around the
            world.
          </h3>
          <p className="text-sm mb-4">
            Practice and explore real scenarios in an ultra-secure and safe
            environment.
          </p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleMove}
          >
            Get building
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow w-full max-w-sm">
          <h3 className="font-semibold mb-2">
            Create your award-winning promotions with our help.
          </h3>
          <p className="text-sm mb-4">
            Gradually wean yourself off the high-priced platforms like Amazon
            and Facebook and sell directly to your clientele.
          </p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleMove}
          >
            Prepare now
          </button>
        </div>
      </div>
    </div>
  );
};
export default GettingStarted;
