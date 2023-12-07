import axios from 'axios';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/api/items')
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);
  if (items.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/details" element={<Details items={items} />}>
          <Route path=":id" element={<DetailItem items={items} />} />
          <Route index element={<div>No Item Selected</div>} />
        </Route>
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
