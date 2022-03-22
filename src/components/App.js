import './App.css';
import '../components/App'
import Navbar from './pages/Navbar';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Principal from './pages/principal';
import SobreMi from './pages/SobreMi';
import Pdf from './pages/curriculumPdf'



function App() {
  return (
<>
<Navbar/>
<BrowserRouter>

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="SobreMi/*" element={<SobreMi />} />
        <Route path="curriculum/*" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
/**/