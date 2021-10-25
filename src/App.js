import AddContact from "./component/AddContact";
import Home from "./component/Home";
import ContactList from "./component/ContactList";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios'
axios.defaults.baseURL = "https://contact-app-req.herokuapp.com";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new_contact" component={AddContact} />
            <Route exact path="/contact_list" component={ContactList} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
