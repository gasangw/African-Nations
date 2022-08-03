import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import CountryData from './components/CountryData/CountryData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/name/:country" element={<CountryData />} />
      </Routes>
    </div>
  );
}

export default App;
