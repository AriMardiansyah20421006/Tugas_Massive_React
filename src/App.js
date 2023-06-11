import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import WisataPage from './pages/WisataPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<WisataPage/>} />
    </Routes>
  );
}

export default App;
