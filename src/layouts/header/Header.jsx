import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SidebarSwipeable from "../sidebar/SidebarSwipeable";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isMobile",
})(({ theme, open, isMobile }) => ({
  background: theme.palette.primary,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${isMobile ? 0 : drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({ open, handleDrawerOpen, isMobile }) {
  const drawerWidth = isMobile ? 0 : 240;
  return (
    <AppBar
      position="fixed"
      open={open}
      isMobile={isMobile}
      sx={{ height: "70px" }}
    >
      <Toolbar>
        {isMobile ? (
          <SidebarSwipeable />
        ) : (
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
        )}
        <Typography variant="h6" noWrap component="div">
          {isMobile ? "nooooooooo" : "yessss"}Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
