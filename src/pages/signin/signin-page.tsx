import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Container, IconButton, Stack } from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export function SignInPage() {
  const navigate = useNavigate();
  const { signIn, register, isAuthenticated } = useContext(AuthContext);

  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  async function handleSubmit() {
    event?.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    await signIn(data);
  }

  async function registerUser() {
    return;
    event?.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    await register(data);
  }

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <Container>
      <Stack
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          component="form"
          sx={{
            width: "50ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="none"
            label="Email"
            id="filled-start-adornment"
            variant="filled"
            value={values.email}
            onChange={handleChange("email")}
          />

          <FormControl variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button variant="contained" type="submit">
            Entrar
          </Button>
          {/* <Button variant="contained" startIcon={<Google />} onClick={signInWithGoogle}>
            Google
          </Button>
          <Button variant="outlined" onClick={registerUser}>
            Cadastro
          </Button> */}
          <Button
            onClick={() => navigate("/")}
            startIcon={<ArrowLeftOutlined />}
          >
            Voltar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
