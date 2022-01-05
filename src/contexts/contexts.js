import { createContext } from "react";

const LoggedUserContext = createContext ({
  id: -1,
  name: "",
  email: "",
  image: "",
  password: ""
} );

export { LoggedUserContext };