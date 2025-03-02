import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import FormNew from "./components/FormNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/q3" element={<FormNew />} />
      </Routes>
    </Router>
  );
}

export default App;
