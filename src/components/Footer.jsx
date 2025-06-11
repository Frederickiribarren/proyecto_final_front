import { Box, Typography, Link, Stack, Container } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%)",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <GavelIcon fontSize="large" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Seguros de Licitaciones
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                Confianza y respaldo en cada proceso de licitación.
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Link
              href="https://twitter.com"
              color="inherit"
              aria-label="Twitter"
              target="_blank"
              rel="noopener"
              sx={{ "&:hover": { color: "#60a5fa" }, fontSize: 0 }}
            >
              <TwitterIcon fontSize="small" />
            </Link>
            <Link
              href="https://facebook.com"
              color="inherit"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
              sx={{ "&:hover": { color: "#60a5fa" }, fontSize: 0 }}
            >
              <FacebookIcon fontSize="small" />
            </Link>
            <Link
              href="https://linkedin.com"
              color="inherit"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener"
              sx={{ "&:hover": { color: "#60a5fa" }, fontSize: 0 }}
            >
              <LinkedInIcon fontSize="small" />
            </Link>
          </Stack>
        </Stack>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            opacity: 0.7,
            mt: 3,
            fontSize: "0.75rem",
          }}
        >
          &copy; {new Date().getFullYear()} Seguros de Licitaciones. Todos los
          derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;