import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddMedication from "./pages/AddMedication.jsx";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AddDoctor from './pages/AddDoctor.jsx';

var emails = ["tonyyang@tamu.edu", "tonyyang@aggienetwork.com"];

var mail = "mailto:"+emails.join()+'?subject=Medication Update';


function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="AddMedication" element={<AddMedication/>}/>
              <Route path="AddDoctor" element={<AddDoctor/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <a href={mail}>Send Email</a>
    </div>
  );
}

export default App;
