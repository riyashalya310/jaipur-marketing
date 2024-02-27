import Cookies from "js-cookie";
import "./index.css";
import ReactContext from "../Context";

const Login = () => (
  <ReactContext.Consumer>
    {(value) => {
      const {
        name,
        password,
        mail,
        phone,
        onChangeEmail,
        onChangeName,
        onChangePassword,
        onChangePhone,
      } = value;
      const onSubmitSuccess = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, { expires: 30 });
        const { history } = this.props;
        history.replace("/");
      };

      const onSubmitForm = async (event) => {
        event.preventDefault();
        const { name, mail, password, phone } = this.state;
        const userDetails = {
          name,
          mail,
          password,
          phone,
        };
        const options = {
          method: "POST",
          body: JSON.stringify(userDetails),
        };
        const response = await fetch("", options);
        const data = await response.json();
        if (response.ok) {
          onSubmitSuccess(data.jwt_token);
        } 
      };
      
      return (
        <div className="background">
          <h1>Create Account</h1>
          <img src="" alt="" />
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={onChangeName}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phone}
              placeholder="Phone"
              onChange={onChangePhone}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={mail}
              onChange={onChangeEmail}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }}
  </ReactContext.Consumer>
);
export default Login;
