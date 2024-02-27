import React from "react";

const ReactContext = React.createContext({
  name: "",
  mail: "",
  password: "",
  phone: "",
  onChangeName: () => {},
  onChangePhone: () => {},
  onChangeEmail: () => {},
  onChangePassword: () => {},
});

export default ReactContext;
