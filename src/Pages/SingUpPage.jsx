import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf`


const SignUp = ({setTokenResponse}) => {
  const navigate = useNavigate();
  <Link to="./SignUpPage" title="Home" id="login">Sign In</Link>
  const handleSubmit = (event) => {

  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  })

  const createUser = async () => {
  try{const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      user: {
        username: data.get('email'),
        password: data.get('password')
      }

    })
  };
  const response = await fetch(`${BASE_URL}/users/register`, requestOptions);
  const data2 = await response.json();
  const tokenResponse = data2.data.token
  console.log(tokenResponse)
  setTokenResponse(tokenResponse)
  } catch (error) {
    console.log(error)
  }
    
  }
  createUser();

  return (
    <>
    {navigate('/Sell')}
    </>
  )
  };





  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Toms Stranger Things Project © '}
        <Link color="inherit" href="https://mui.com/">
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const defaultTheme = createTheme();





  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp