import React, { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
import { plans, planIcons } from "../lib/plans";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setplan } from "../store/goSubscription";

const apiPort = process.env.REACT_APP_API_PORT;
const originalPort = process.env.REACT_APP_ORIGINAL_PORT;

const Subscription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMonthly, setIsMonthly] = useState(true);
  const email = localStorage.getItem("email");

  const handlePayment = async (plan: any, method: string, index: number) => {
    dispatch(setplan({ ...plan, isMonthly }));
    if (email) {
      if (method === "stripe") {
        window.open(
          `${originalPort}/payment?from=brand&planIndex=${index}&isMonthly=${isMonthly}`,
          "_blank"
        );
      } else {
        try {
          const response = await fetch(
            `${originalPort}/api/subscription/paypal`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                plan,
                price: isMonthly ? plan.monthlyPrice : plan.yearlyPrice,
                method,
                frequency: isMonthly ? "monthly" : "yearly",
              }),
            }
          );

          const data = await response.json();
          // console.log(data);
          window.location.href = data.approvalUrl;
        } catch (error) {
          console.error("Payment Error: ", error);
        }
      }
    } else {
     navigate("/login");
    }
  };
  return (
    <div
      className="bg-gray-50 py-16 px-4 text-center "
      style={{
        background:
          "linear-gradient(to right, #ff0080, #7928ca, #0070f3, #001220)",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Learn by Occupational Role
      </h2>
      <div className="text-center mb-10">
        <div className="inline-flex items-center bg-gray-800 text-gray-300 rounded-full py-1 px-4">
          <button
            className={`px-4 py-2 rounded-full ${
              isMonthly ? "bg-gray-600 text-white" : ""
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <div
            className={`px-4 py-2 rounded-full ${
              !isMonthly ? "bg-gray-600 text-white" : ""
            }`}
          >
            <button onClick={() => setIsMonthly(false)}>Yearly</button>
            {!isMonthly && (
              <span className="text-blue-700 bg-gray-200 rounded-full text-sm px-2 py-1 ml-2">
                Save 10%
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
          >
            <img
              src={`image/icons/${planIcons[index]}`}
              alt={plan.title}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
            />
            <p className="text-lg sm:text-xl font-bold mb-2">
              {plan.title}
            </p>
            <p className="text-sm sm:text-base font-medium">
              {plan.descriptions}
            </p>
            <p className="text-xl mb-4 font-semibold mt-4">
              ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice }
              {" / "}
              <span className="text-sm">{isMonthly ? "Month" : "Year -10%"}</span>
            </p>
            <button
              onClick={() => handlePayment(plan, "stripe", index)}
              className={` ${
                plan.title === "Plus+"
                  ? "bg-blue-500 text-white hover:text-blue-500"
                  : " text-blue-500  border border-blue-500"
              } py-2 px-4 rounded-lg hover:bg-blue-200 transition flex justify-center mb-2`}
            >
              Pay with Stripe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Subscription;
