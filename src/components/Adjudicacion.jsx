import { Box, Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import lici1 from "../assets/lic01_1.png";
import lici2 from "../assets/lic02_1.png";
import lici3 from "../assets/lic03_1.png";
import lici4 from "../assets/lic04_1.png";
import lici5 from "../assets/lic05_1.png";
import lici6 from "../assets/lic06_1.png";


const adjudicacion = () => {
    return (
        <Box>
            <Typography sx={{ color: red[600], textAlign: "center", marginTop: 10, fontSize: "25px", width : "90%", mx: "auto", justifyContent: "center", alignItems: "center" }}>
                <strong>Los procesos de licitación garantizan transparencia y competencia</strong>, permitiendo seleccionar la mejor opción mediante evaluación, adjudicación y cumplimiento normativo eficiente
            </Typography>
            <Box sx={{
                display: { xs: "none", sm: "flex" }, // Oculta en pantallas xs (smartphone)
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                mt: 15,
                width: "90%",
                mx: "auto",
                position: "relative"
            }}>
                {/* Línea horizontal que pasa solo por el centro de las imágenes */}
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc((100% / 12))",
                        right: "calc((100% / 12))",
                        width: "auto",
                        height: 4,
                        background: red[600],
                        zIndex: 1,
                        top: `calc(50% - 45px)`,
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                        '@media (max-width: 1437px)': {
                            display: "none"
                        }
                    }}
                />
                {/* Imágenes y textos */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici1} alt="Licitación 1" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Creación Licitación</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici2} alt="Licitación 2" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Invitación de proveedores</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici3} alt="Licitación 3" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Resolución de preguntas</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici4} alt="Licitación 4" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />   
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Recepción de ofertas</Typography> 
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici5} alt="Licitación 5" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Adjudicación</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 200px", minWidth: 180, justifyContent: "flex-end", height: 180, zIndex: 2, position: "relative" }}>
                    <img src={lici6} alt="Licitación 6" style={{ width: 90, height: 90, objectFit: "contain", zIndex: 3, background: "#fff" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "20px", color: red[600], fontWeight: "bold", mt: "auto" }}>Generación de informes</Typography>
                </Box>
            </Box>
        </Box>
    );
}
export default adjudicacion;