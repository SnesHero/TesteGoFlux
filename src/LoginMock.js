import { useState } from "react";
import { Dashboard } from "./Dashboard";
import {
  Button,
  TextField,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
//import PersonIcon from "@mui/icons-material"

export default () => {
  const APIKEY = "AIzaSyBY2TVhZNXnDY_KCw3plekpqjmQtm6_tPk";
  const [userClass, setUserClass] = useState("");
  const [logged, setLogged] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassowrd, setUserPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [loginError, setLoginError] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleEmbarcador = () => {
    setUserClass("embarcador");
    setLogged(true);
  };

  const handleTransportador = () => {
    setUserClass("transportaor");
    setLogged(true);
  };

  const handleReturn = () => {
    setLogged(false);
    setUserClass("");
    setUserEmail("");
    setUserPassword("");
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLoggin = () => {
    if (loggedUser === "admin@embarcadora.com") {
      setUserClass("embarcador");
      setLogged(true);
      setLoginError(false);
    } else if (loggedUser === "admin@transportadora.com") {
      setUserClass("transportaor");
      setLogged(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleRequest = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        password: userPassowrd,
        returnSecureToken: true,
      }),
    };

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setLoggedUser(data.email);
      handleLoggin();
    } catch (err) {
      console.log("Login nao foi");
      console.log(userEmail, userPassowrd);
    }
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        {loginError ? <div>Usuário Inválido</div> : <div></div>}
        {logged ? (
          <div>
            <Button variant="contained" onClick={handleReturn}>
              Sair
            </Button>
            <Dashboard user={userClass} />
          </div>
        ) : (
          <div>
            <div className="LoginForms">
              <div>
                <FontAwesomeIcon icon={faUserCheck} size="xl" />
                <TextField
                  variant="outlined"
                  focused
                  onChange={handleEmail}
                  value={userEmail}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faUserLock} size="xl" />
                <TextField
                  variant="outlined"
                  focused
                  onChange={handlePassword}
                  value={userPassowrd}
                />
              </div>
            </div>
            <Button variant="contained" onClick={handleEmbarcador}>
              Embarcadora
            </Button>
            <Button variant="contained" onClick={handleTransportador}>
              Transportadora
            </Button>
            <Button variant="contained" onClick={handleRequest}>
              Login
            </Button>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
};
