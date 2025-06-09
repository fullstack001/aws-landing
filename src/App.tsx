import Hero from "./components/Hero";
import ConsoleSandbox from "./components/ConsoleSandbox";
import GettingStarted from "./components/GettingStarted";
import Subscription from "./components/Subscription";
import SimuLearn from "./components/SimuLearn";
import SubscriptionBanner from "./components/SubscriptionBanner";
import Extra from "./components/Extra";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <ConsoleSandbox />
      <GettingStarted />
      <Subscription />
      <SimuLearn />
      <SubscriptionBanner />
      <Extra />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default App;
