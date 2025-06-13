import Hero from "./components/Hero";
import ConsoleSandbox from "./components/ConsoleSandbox";
import GettingStarted from "./components/GettingStarted";
import Subscription from "./components/Subscription";
import SimuLearn from "./components/SimuLearn";
import SubscriptionBanner from "./components/SubscriptionBanner";
import Extra from "./components/Extra";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Tippy from "@tippyjs/react"; // Import Tippy.js
import "tippy.js/dist/tippy.css";

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
      <Tippy content="Click here to ask any questions about our business plans.">
          <a
            href="https://labs.heygen.com/interactive-avatar/share?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9Qcm9mZXNzaW9uYWxMb29rX3B1%0D%0AYmxpYyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzM0%0D%0AOGRkZjUwM2M2NTRiOWJiYmI4YmVhOWY5MjEwZWFkXzU1ODcwL3ByZXZpZXdfdGFyZ2V0LndlYnAi%0D%0ALCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiNmQxYjZiZWYy%0D%0AMDZlNDQwMDg5Mzg5YzU4ZmMyOTdkMzIiLCJ1c2VybmFtZSI6IjA3NDFmN2M1ZTFkMzRhOGNhNTk4%0D%0AM2QxZDc5NjQ1NTBjIn0%3D "
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-[5%] left-[5%] bg-[#27ae60] text-xl text-white p-4 rounded-full shadow-lg hover:bg-[#219150] transition"
            style={{ zIndex: 1000 }}
          >
            💬
          </a>
        </Tippy>
    </div>
  );
}
export default App;
