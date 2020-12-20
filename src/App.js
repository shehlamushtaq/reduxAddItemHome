import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useDispatch } from 'react-redux';

function App() {

  const arr = [
    
    {
        id: 1,
        title: "First Product"
    },
    {
        id: 2,
        title: "2nd Product"
    },

  ];

  const dispatch = useDispatch();

  const FillProducts = () => {

    dispatch({ 
      type: 'FILL_PRODUCTS', 
      payload: arr
    });

  }
  
  return (
   <div>
     <h1>My E-commerce Store</h1>
     <ProductList />
     <button onClick={() => dispatch({ type: 'FILL_PRODUCTS', payload: arr})}>Fill Products Array</button>
     {/* <button onClick={FillProducts}>Fill Products Array</button> */}
   </div>
  );
}

export default App;
