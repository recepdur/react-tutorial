import React from "react";
import "./App.css";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    axios.defaults.withCredentials = true;
    //axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.baseURL = "https://crm-laravel-api.herokuapp.com";

    axios.get("/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios
        .post("/api/login", {
          email: "recep_1@gmail.com",
          password: "123456",
        })
        .then((response2) => {
          console.log(response2);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
