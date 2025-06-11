import { Typography,Box } from "@mui/material";
import portada from "../assets/portada.png";


const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        alignContent: "center",
        textAlign: "start",
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={portada}
        alt="Portada"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
            filter: "brightness(0.3)", 
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: "#fff", fontWeight: "bold", fontSize: "4rem" }}>
          LICITA SEGUROS
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "1.5rem" }}>
          Tu acceso claro a licitaciones de seguros.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;