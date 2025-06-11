import { Box, Typography, useTheme } from "@mui/material"
import { red } from "@mui/material/colors";
import lici1 from "../assets/lic01_1.png";
import lici2 from "../assets/lic02_1.png";
import lici3 from "../assets/lic03_1.png";
import lici4 from "../assets/lic04_1.png";
import lici5 from "../assets/lic05_1.png";
import lici6 from "../assets/lic06_1.png";

const pasos = [
    { img: lici1, alt: "Licitación 1", label: "Creación Licitación" },
    { img: lici2, alt: "Licitación 2", label: "Invitación de proveedores" },
    { img: lici3, alt: "Licitación 3", label: "Resolución de preguntas" },
    { img: lici4, alt: "Licitación 4", label: "Recepción de ofertas" },
    { img: lici5, alt: "Licitación 5", label: "Adjudicación" },
    { img: lici6, alt: "Licitación 6", label: "Generación de informes" },
];

const Adjudicacion = () => {
    const theme = useTheme();
    return (
        <Box>
            <Typography sx={{
                color: red[600],
                textAlign: "center",
                marginTop: 10,
                fontSize: { xs: "18px", sm: "25px" },
                width: "90%",
                mx: "auto",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <strong>Los procesos de licitación garantizan transparencia y competencia</strong>, permitiendo seleccionar la mejor opción mediante evaluación, adjudicación y cumplimiento normativo eficiente
            </Typography>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 3 },
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: 6, sm: 15 },
                width: "90%",
                mx: "auto",
                position: "relative"
            }}>
                {/* Tarjetas de pasos */}
                {pasos.map((paso, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: "1 1 180px",
                            minWidth: 140,
                            maxWidth: 200,
                            justifyContent: "flex-end",
                            height: 200,
                            zIndex: 2,
                            position: "relative",
                            background: "#fff",
                            borderRadius: 3,
                            boxShadow: 2,
                            transition: "box-shadow 0.3s, transform 0.3s",
                            cursor: "pointer",
                            p: 2,
                            "&:hover": {
                                boxShadow: 6,
                                transform: "translateY(-8px) scale(1.04)",
                                background: theme.palette.mode === "dark" ? "#222" : "#f8f8f8"
                            }
                        }}
                    >
                        <Box
                            sx={{
                                width: 90,
                                height: 90,
                                borderRadius: "50%",
                                overflow: "hidden",
                                mb: 1,
                                boxShadow: 1,
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <img src={paso.img} alt={paso.alt} style={{ width: 70, height: 70, objectFit: "contain" }} />
                        </Box>
                        <Typography sx={{
                            textAlign: "center",
                            fontSize: { xs: "15px", sm: "20px" },
                            color: red[600],
                            fontWeight: "bold",
                            mt: "auto"
                        }}>
                            {paso.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
export default Adjudicacion;