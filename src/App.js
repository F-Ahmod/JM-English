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
     
      <Switch>
      


        <Route exact path="/">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>

        </Route>

        <Route path="/home">
        <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path="/about">
        <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>

        <Route path="/service">
        <Header></Header>
          <Service></Service>
          <Footer></Footer>
        </Route>
        <Route path="/booking">
        <Header></Header>
          <BookingCourse></BookingCourse>
          <Footer></Footer>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
