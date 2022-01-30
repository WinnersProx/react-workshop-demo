import "./App.css";

import ProdutLists from "./components/products/ProdutLists";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newpage from "./components/products/productsDetails/Newpage";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProdutLists />} />
          <Route exact path="/newpage/:productId" element={<Newpage />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
