import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "react-router-dom";
import * as React from "react";

export default function LoginPage() {

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>


            <Stack justifyContent="center" width="40%" mt={10}>
                <CssBaseline/>
                <Stack spacing={2}>
                    <Stack spacing={3} alignItems={"center"}  direction={"column"}>
                        <Avatar>
                            <LoginIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2}>
                        <TextField
                            // onChange={(event)=>handelAccount("username",event)}
                            variant="outlined"
                            margin="normal"
                            required
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                        />
                        <TextField
                            // onChange={(event)=>handelAccount("password",event)}
                            variant="outlined"
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            disableElevation
                            variant="contained"
                            color="primary"
                        >
                            <Link to="/" style={{ textDecoration: "none"}}>
                                <Typography variant="button" sx={{color: "white"}}>Login</Typography>
                            </Link>

                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}
