import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormList from "./components/FormList/FormList";
import FormEditor from "./components/FormEditor/FormEditor";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FormList />} />
        <Route path="/forms" element={<FormList />} />
        <Route path="/forms/new" element={<FormEditor />} />
        <Route path="/login" element={<Authentication />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
