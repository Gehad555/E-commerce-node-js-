import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/auth";
import { SearchProvider } from "./Context/search";
import { CartProvider } from "./Context/cart";
import App from "./App";
import ReactDOM from "react-dom";
import "antd/dist/reset.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);


reportWebVitals();