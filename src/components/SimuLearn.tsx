const SimuLearn = () => {
  const handleMove = () => {
    window.location.href = "https://bestglobalai.com";
  };
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">
        Market Your Product and Service
      </h2>
      <p className="max-w-2xl mx-auto">
        Purchase Package Plan with privacy, security, and trust.
      </p>
      <p className="max-w-2xl mx-auto">
        *If you do a three or more year contract, you get an overall 10% savings
      </p>
      <button
        className="mt-4 px-6 py-2 bg-blue-700 text-white rounded"
        onClick={handleMove}
      >
        Discover BGAI today!
      </button>
    </div>
  );
};
export default SimuLearn;
