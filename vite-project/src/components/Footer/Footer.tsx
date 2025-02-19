import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        bgcolor: "#2C2C2C",
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1, color: "#4CAF50" }}>
        © 2025 Google Form Clone
      </Typography>
    </Box>
  );
};

export default Footer;
