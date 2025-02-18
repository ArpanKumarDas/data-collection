import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import FormNew from "./components/FormNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/data-collection" element={<Form />} />
        <Route path="/data-collection/q3" element={<FormNew />} />
      </Routes>
    </Router>
  );
}

export default App;
