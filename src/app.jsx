import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useToast } from "./hooks/useToast"; 
import ToastContainer from "./components/ToastContainer";

function App() {
  const { toasts } = useToast();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer toasts={toasts} />
    </Router>
  );
}

export default App;
