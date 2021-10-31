import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import AddService from './pages/AddService/AddService';
import AllOrders from './pages/AllOrders/AllOrders';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
        <Header></Header>
         <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:serviceId">
                 <Booking></Booking>
              </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/allorders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
         </Switch>
         <Footer></Footer>
      </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
