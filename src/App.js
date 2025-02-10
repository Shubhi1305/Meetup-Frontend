import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";


const App = () => {

  return(
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/eventDetails/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  </Router>
   
  )
}

export default App;