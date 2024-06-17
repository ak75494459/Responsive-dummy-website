import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Hero from './layouts/Hero';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout><Hero/></Layout>} />
    </Routes>
  );
}

export default App;
