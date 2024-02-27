import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { Component } from "react";
import ReactContext from "./components/Context";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  state = {
    name: "",
    phone: "",
    mail: "",
    password: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ mail: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { name, password, mail, phone } = this.state;
    return (
      <ReactContext.Provider
        value={{
          name,
          password,
          mail,
          phone,
          onChangeEmail: this.onChangeEmail,
          onChangeName: this.onChangeName,
          onChangePassword: this.onChangePassword,
          onChangePhone: this.onChangePhone,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <ProtectedRoute index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ReactContext.Provider>
    );
  }
}

export default App;
