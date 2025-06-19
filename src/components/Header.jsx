import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Inicio", "Filtrar", "Ver Deatlles", "Buscar proveedores"];

/**
 * DrawerList
 * Renderiza la lista de navegación para el menú lateral en dispositivos móviles.
 * Recibe una función onClick para cerrar el Drawer al seleccionar una opción.
 */
const DrawerList = ({ onClick }) => (
  <Box onClick={onClick} sx={{ textAlign: "center" }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      LicitaSeguro
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: "center", color: "#000" }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

/**
 * Header
 * Componente principal de la barra de navegación.
 * Incluye:
 *  - Logo de la aplicación.
 *  - Menú de navegación adaptable (AppBar para escritorio, Drawer para móvil).
 *  - Botón de menú hamburguesa visible solo en móvil.
 *  - Navegación estilizada con Material UI.
 */
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: { xs: 56, sm: 72 } }}>
      <CssBaseline />
      {/* Barra superior de navegación */}
      <AppBar
        component="nav"
        elevation={2}
        sx={{
          
          backgroundColor: "#ff3f",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 72 }, pl: { xs: 2, sm: 3 } }}>
          {/* Botón menú hamburguesa para móvil */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ml: { xs: 1, sm: 0 }, // Agrega margen izquierdo en mobile
              display: { sm: "none" },
              border: "1.5px solid #e53935",
              background: "#fff",
              "&:hover": {
                background: "#ffeaea",
                borderColor: "#b71c1c",
              },
            }}
          >
            <MenuIcon sx={{ color: "#e53935" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              gap: { xs: 1, sm: 4 },
            }}
          >
            {/* Logo de la aplicación */}
            <img
              src={logo}
              alt="Logo"
              style={{
                height: 100,
                marginRight: 24,
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                background: "#fff",
                padding: 4,
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              {/* Botones de navegación para escritorio */}
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: 16,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: "relative",
                    background: "none",
                    textTransform: "none",
                    transition: "color 0.2s",
                    "&::after": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "100%",
                      height: "2px",
                      background: "#e53935",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                      transformOrigin: "left",
                    },
                    "&:hover": {
                      color: "#e53935",
                      background: "#fff5f5",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer lateral para navegación en móvil */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#fff",
              borderRight: "1.5px solid #e0e0e0",
            },
          }}
        >
          <DrawerList onClick={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
