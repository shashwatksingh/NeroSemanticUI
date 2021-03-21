import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from './utils/AuthRoute';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Menubar from "./components/MenuBar";

function App() {
  return (
    <AuthProvider>
      <Router className="App">
        <Menubar />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Router>
    </AuthProvider>
  );
}

export default App;
