import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom"; 
import Router from "./router";

function App() {
  return (
   
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter> 
  );
}

export default App;
