import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
