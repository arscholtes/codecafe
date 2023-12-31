import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import { cartReducer, initialCartState } from './reducers/cartReducer';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => {
    axios.get('/api/items')
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);
  return (
    <Router>
      <Header cart={cart} />
      {items.length === 0
        ? <div>Loading...</div>
        : (
          <Routes>
            <Route path="/details" element={<Details items={items} />}>
              <Route path=":id" element={<DetailItem items={items} />} />
              <Route index element={<div>No Item Selected</div>} />
            </Route>
            <Route path="/" element={<Home items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
    </Router>
  );
}

export default App;
