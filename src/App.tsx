import Hero from "./components/Hero";
import ConsoleSandbox from "./components/ConsoleSandbox";
import GettingStarted from "./components/GettingStarted";
import LearnByRole from "./components/LearnByRole";
import SimuLearn from "./components/SimuLearn";
import SubscriptionBanner from "./components/SubscriptionBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <ConsoleSandbox />
      <GettingStarted />
      <LearnByRole />
      <SimuLearn />
      <SubscriptionBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default App;
