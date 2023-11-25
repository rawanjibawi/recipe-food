
import './App.css';
import Nav from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomeRecipeLists'
import RecipePage from './pages/RecipePage'
import Menu from './pages/Menu'
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
