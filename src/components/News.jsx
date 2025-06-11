import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import news1 from "../assets/creacion.jpg";
import news2 from "../assets/ofertas.jpg";
import news3 from "../assets/resolu-problem.jpg";
import news4 from "../assets/adjudicadas.jpg";
import news5 from "../assets/finance.jpg";
import data from "../json/data.json";

// Mapeo de nombres de imagen a importaciones reales
const imageMap = {
  news1,
  news2,
  news3,
  news4,
  news5,
};

const News = () => {
  // Asigna la imagen real a cada sección usando el nombre del JSON
  const sections = data.map((section) => ({
    ...section,
    image: imageMap[section.image] || "",
  }));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
          paddingLeft: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "red" }}>
          Actualización de Procesos de Licitación
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ mt: 2, mb: 2, justifyContent: "center" }}
      >
        {sections.map((section) => (
          <Grid item xs={12} md={10} key={section.title}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                background: "#f5f7fa",
                borderRadius: 3,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                p: { xs: 2, md: 3 },
              }}
            >
              <CardMedia
                component="img"
                image={section.image}
                alt={section.title}
                sx={{
                  width: { xs: "100%", md: 260 },
                  height: 180,
                  borderRadius: 2,
                  objectFit: "cover",
                  mr: { md: 3 },
                  mb: { xs: 2, md: 0 },
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: "#1976d2",
                    letterSpacing: 1,
                    mb: 1,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {section.title}
                </Typography>
                <List dense>
                  {section.items.map((item, i) => (
                    <Box key={item.company}>
                      <ListItem alignItems="flex-start" disableGutters>
                        <ListItemText
                          primary={
                            <Typography fontWeight="bold" color="primary">
                              {item.company}
                            </Typography>
                          }
                          secondary={
                            <Typography color="text.secondary" variant="body2">
                              {item.desc}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {i < section.items.length - 1 && (
                        <Divider variant="inset" component="li" />
                      )}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
