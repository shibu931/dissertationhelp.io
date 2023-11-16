import { BrowserRouter,Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import OrderPage from "./Components/OrderPage";
import ThankYouPage from "./Components/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/order" element={<OrderPage/>}/>
      <Route path="/thankyou" element={<ThankYouPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
