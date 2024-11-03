import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import {Inventory2, LocalMall} from "@mui/icons-material";
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({open}) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({open}) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MainDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const location = useLocation();

    console.log(location.pathname)

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && {display: 'none'},
                        ]}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <Stack
                    spacing={2}
                    mt={2}
                    direction="column"
                    marginLeft={2}
                >
                    <Button
                        disableElevation
                        varient={location.pathname === "/customer" ? "contained" : "text"}
                        color="primary"
                        fullWidth
                        startIcon={<PersonIcon/>}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            color: location.pathname === "/customer" ? "primary" : "inherit",
                        }}
                    >
                        <Link to="/customer" style={{
                            textDecoration: "none",
                            color: location.pathname === "/customer" ? "primary" : "inherit",
                        }}>
                            Customer
                        </Link>
                    </Button>
                    <Button
                        disableElevation
                        varient="text"
                        color="primary"
                        fullWidth
                        startIcon={<Inventory2/>}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            color: location.pathname === "/product" ? "primary" : "inherit",
                        }}
                    >
                        <Link to="/product" style={{
                            textDecoration: "none",
                            color: location.pathname === "/product" ? "primary" : "inherit",
                        }}>
                            Product
                        </Link>
                    </Button>
                    <Button
                        disableElevation
                        varient="text"
                        color="primary"
                        fullWidth
                        startIcon={<LocalMall/>}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            color: location.pathname === "/order" ? "primary" : "inherit",
                        }}
                    >
                        <Link to="/order" style={{
                            textDecoration: "none",
                            color: location.pathname === "/order" ? "primary" : "inherit",
                        }}>
                            Order
                        </Link>
                    </Button>
                    <Divider/>
                    <Button
                        disableElevation
                        varient="text"
                        color="primary"
                        fullWidth
                        startIcon={<LogoutIcon />}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Link to="/login" style={{
                            textDecoration: "none",
                        }}>
                            Logout
                        </Link>
                    </Button>
                </Stack>
            </Drawer>
            <Main open={open}>
                <DrawerHeader/>
                <Outlet/>
            </Main>
        </Box>
    );
}
