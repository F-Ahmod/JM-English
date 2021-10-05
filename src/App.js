import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Service from './pages/Service/Service';
import NotFound from './pages/not found/NotFound';
import BookingCourse from './pages/Booking Course/BookingCourse';

function App() {
  return (
    <div className="bg-success p-2 text-dark bg-opacity-25">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/booking">
          <BookingCourse></BookingCourse>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
