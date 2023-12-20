import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import appleIcon from "../images/appleicon.svg"
import googleIcon from "../images/googleicon.svg"
import spotifyIcon from "../images/spotifyicon.svg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {  
    navigate('/')
  };

  const loginTheme = createTheme({
    palette: {
        primary: {
            main: '#628ca6',
        },
        secondary: {
            main: '#95acb2',
        },
        text: {
            primary: '#FFFFFF',
        }
    }
  })

  return (
    <ThemeProvider theme={loginTheme}>
        <Box className="login-page">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className="login-card">
                    <Box className="login-content">
                        <Avatar sx={{ m: 0.5, bgcolor: "primary.dark" }}>
                            <LibraryMusicOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5">Welcome Back</Typography>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                placeholder="name@email.com"
                                name="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{style: {color: "#fffff"}}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                InputProps={{style: {color: "#fffff"}}}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, p: 2, color: "#FFFFFF"}}
                                onClick={handleLogin}
                            >Login</Button>
                            <Box sx={{ mt: 2 }}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        New to Beat Roulette? <Link to="/register">Sign up</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Divider sx={{ my: 2, borderWidth: '3px', borderColor: 'black' }}>OR</Divider>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ p: 2, textTransform: 'none', display: 'flex', alignItems: 'center' }}
                                        onClick={handleLogin}
                                    >
                                        <img src={googleIcon} alt="Google Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                                        <span style={{ flex: 1, textAlign: 'center' }}>Continue with Google</span>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ p: 2, textTransform: 'none', display: 'flex', alignItems: 'center' }}
                                        onClick={handleLogin}
                                    >
                                        <img src={spotifyIcon} alt="Spotify Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                                        <span style={{ flex: 1, textAlign: 'center' }}>Continue with Spotify</span>                                    
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ p: 2, textTransform: 'none', display: 'flex', alignItems: 'center' }}
                                        onClick={handleLogin}
                                    >
                                        <img src={appleIcon} alt="Apple Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                                        <span style={{ flex: 1, textAlign: 'center' }}>Continue with Apple</span>                                    
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    </ThemeProvider>
  );
};

export default Login;