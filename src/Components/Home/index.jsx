import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import QueueIcon from "@mui/icons-material/Queue";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import {
  alpha,
  Avatar,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreatePost from "../CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { changeToDarkMode, setUserDetails } from "../../features/todo/echosnapSlice";
import { changeToLightMode } from "../../features/todo/echosnapSlice";
import { removeKeyFromLocalStorage } from "../../utils/PersistantData";
import StarsCanvas from "../../canvas/stars";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function MiniDrawer({ component }) {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openPostDialog, setOpenPostDialog] = React.useState(false);
  const [file, setFile] = React.useState([]);

  const profileNavigation={
    Profile:"userprofile",
    Dashboard:"dashBoard",
    Account:"account"
  }
  const handleClickOpen = () => {
    setOpenPostDialog(true);
  };
  const handleClose = () => {
    setFile([])
    setOpenPostDialog(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleRouting = (routing) => {
    if (routing == "create") {
      handleClickOpen();
    } else {
      navigate(`/${routing}`);
    }
  };
  const handleProfileRouting = (title) => {
    if(title === "Logout")
    {
      removeKeyFromLocalStorage("user");
      dispatch(setUserDetails({}));
      window.location.reload();
    }
    else{

      navigate(`/${profileNavigation[title]}`);
    }
  };

  const darkMode = useSelector((state) => state.darkMode);
  const handleToggleTheme = () => {
    if (!darkMode) {
      dispatch(changeToDarkMode());
    } else {
      dispatch(changeToLightMode());
    }
  };

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    background: darkMode ? "#333" : "#F4F6F6",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    background: darkMode ? "black" : "#fff",
    color: darkMode ? "#fff" : "black",
    borderRight: darkMode
      ? "1px solid rgba(255, 255, 255, 0.12)"
      : "1px solid rgba(0, 0, 0, 0.12)",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
    background: darkMode ? "black" : "#fff",
    color: darkMode ? "#fff" : "black",
    borderRight: darkMode
      ? "1px solid rgba(255, 255, 255, 0.12)"
      : "1px solid rgba(0, 0, 0, 0.12)",
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: darkMode ? "black" : "#fff",
          color: darkMode ? "#fff" : "black", 
          boxShadow: darkMode
            ? "rgba(255, 255, 255, 0.1) 0px 1px 0px"
            : "rgba(17, 17, 26, 0.1) 0px 1px 0px", 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 600, fontSize: "29px" }}
            >
              €ℂ
              <span style={{ color: "#e6d255" }}>н</span>
              𝓸𝐬𝓝Ãᵖ
            </Typography> */}
              <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 600, fontSize: "29px" }}
            >
             €ℂ
              <span style={{ color: "#e6d255" }}>н</span>
              osnap
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: 300,
                display: "flex",
                alignItems: "center",
              }}
            >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        sx={{ m: 1 }}
                        onChange={handleToggleTheme}
                      />
                    }
                  />
                </FormGroup>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Bhanuprakash"
                      src="https://i.imgur.com/4HmVYKq.png"
                      sx={{
                        background: "#AE433D ",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handleProfileRouting(setting)}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ background: "green" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{
                  color: darkMode
                    ? "rgba(255, 255, 255, 0.54)"
                    : "rgba(0, 0, 0, 0.54);",
                }}
              />
            ) : (
              <ChevronLeftIcon
                sx={{
                  color: darkMode
                    ? "rgba(255, 255, 255, 0.54)"
                    : "rgba(0, 0, 0, 0.54);",
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{ color: darkMode && "white" }}>
          {[
            { title: "Home", icon: <HomeIcon />, router: "" },
            { title: "Search", icon: <SearchIcon />, router: "search" },
            { title: "Explore", icon: <ExploreIcon />, router: "explore" },
            { title: "Reels", icon: <QueueIcon />, router: "reels" },
            { title: "Message", icon: <ChatIcon />, router: "message" },
            {
              title: "Notification",
              icon: <NotificationsActiveIcon />,
              router: "activity",
            },
            {
              title: "Create",
              icon: <AddCircleOutlineIcon />,
              router: "create",
            },
          ].map((item, index) => (
            <ListItem
              key={item.title}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleRouting(item.router)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: darkMode && "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {component}
      </Box>
      <StarsCanvas style={{position:"absolute",top:0,left:0}}/>
      <CreatePost
        open={openPostDialog}
        setOpen={setOpenPostDialog}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        file={file}
        setFile={setFile}
      />
    </Box>
  );
}
