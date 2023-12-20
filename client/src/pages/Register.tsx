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
  Checkbox,
  FormControlLabel
} from "@mui/material";
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"; // Ensure to create a Register.css file for styling
import appleIcon from "../images/appleicon.svg"
import googleIcon from "../images/googleicon.svg"
import spotifyIcon from "../images/spotifyicon.svg"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [termsChecked, setTermsChecked] = useState(false);
  const [subscribeChecked, setSubscribeChecked] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {  
    navigate('/')
  };

  const registerTheme = createTheme({
    palette: {
      primary: {
        main: "#628ca6",
      },
      secondary: {
        main: "#95acb2",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={registerTheme}>
      <Box className="register-page">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className="register-card">
            <Box className="register-content">
              <Avatar sx={{ m: 0.5, bgcolor: "primary.dark"}}>
                <AssignmentLateOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Register</Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="First Name"
                      required
                      fullWidth
                      id="firstname"
                      label="First Name"
                      placeholder="Jane"
                      autoFocus
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="Last Name"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      placeholder="Doe"
                      autoFocus
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Username"
                      name="username"
                      placeholder="janedoe303"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confpassword"
                      label="Confirm Password"
                      type="confpassword"
                      id="confpassword"
                      placeholder="password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                      What are you using the application for?
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        p: 3,
                        color: "#FFFFFF",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        "& .MuiSvgIcon-root": {
                          width: '48px',
                          height: '48px',
                        },
                      }}
                      onClick={handleRegister}
                    >
                      Professional
                      <BusinessCenterIcon />
                    </Button>
                  </Grid>
  
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        p: 3,
                        color: "#FFFFFF",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        "& .MuiSvgIcon-root": {
                          width: '48px',
                          height: '48px',
                        },
                      }}
                      onClick={handleRegister}
                    >
                      Enthusiast
                      <EmojiEmotionsIcon />
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={termsChecked}
                          onChange={(e) => setTermsChecked(e.target.checked)}
                          color="primary"
                        />
                      }
                      label="I have read and accept Beat Roulette's Terms of Use and Privacy Notice."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={subscribeChecked}
                          onChange={(e) => setSubscribeChecked(e.target.checked)}
                          color="primary"
                        />
                      }
                      label="I'm interested in subscribing to email notifications nd product updates!"
                    />
                  </Grid>

                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: "#FFFFFF" }}
                  onClick={handleRegister}
                >
                  <p>Register</p>
                </Button>
                <Box sx={{ mt: 2 }}>
                  <Grid container justifyContent="center">
                    <Grid item>
                      Already a Beat Rouletter? <Link to="/login">Log in</Link>
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
                              onClick={handleRegister}
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
                              onClick={handleRegister}
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
                              onClick={handleRegister}
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

export default Register;
