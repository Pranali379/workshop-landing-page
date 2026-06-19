import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Outcomes from "./components/Outcomes";
import Curriculum from "./components/Curriculum";
import FAQ from "./components/FAQ";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <Outcomes />
       <Curriculum />
      <FAQ />
      <Form />

      <footer className="bg-gray-900 text-white py-8 text-center">
    <h3 className="text-lg font-bold">
      AI & Robotics Summer Workshop
    </h3>

    <p className="text-gray-400 mt-2">
      Inspiring young innovators through AI and Robotics.
    </p>

    <p className="text-gray-500 text-sm mt-4">
      © 2026 KidWorkshop. All rights reserved.
    </p>
  </footer>
      
    </>
  );
}

export default App;