import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    if (this.state.username && this.state.password) {
      e.preventDefault();
      this.setState({
        loggedIn: true,
      });
    }

    axios
      .post("http://localhost:5000/users/login", this.state)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/oferta" />;
    }

    if (localStorage.getItem("token")) {
      return <Redirect to="/oferta" />;
    }

    return (
      <div className="container m-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
