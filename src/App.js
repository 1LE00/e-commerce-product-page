import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  let [value, setValue] = useState(1);
  let [total, setTotal] = useState(0);
  let [cartValue, setCartValue] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  function handleIncrement() {
    if (value !== 30) {
      setValue(value + 1);
    }
  }
  function handleDecrement() {
    if (value !== 1) {
      setValue(value - 1);
    }
  }
  function handleDelete() {
    setValue(1);
    setTotal(0);
    setCartValue(0);
    setIsAdded(false);
  }

  function addToCart() {
    if (value !== 0) {
      setCartValue(value);
      setIsAdded(true);
      setTotal(parseFloat(125.00 * value));
    }
  }

  return (
    <div className="App">
      <Header value={cartValue} total={total} isAdded={isAdded} delete={handleDelete} />
      <Main increase={handleIncrement} decrease={handleDecrement} value={value} cart={addToCart} />
    </div>
  );
}

export default App;
