import './App.css';
import {Button} from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
       <Route path="/login">
         {/* <Protected Cmp = {Login} /> */}
         <Login />
       </Route>
       <Route path="/register">
       {/* <Protected Cmp = {Register} /> */}
       <Register />
       </Route>
       <Route path="/add">
       <Protected Cmp = {AddProduct} />
       </Route>
       <Route path="/update">
       <Protected Cmp = {UpdateProduct} />
       </Route>
       <Route path="/">
       <Protected Cmp = {ProductList} />
       </Route>
       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
