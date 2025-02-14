import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 1,
          mb: 1.5,
        }}
      >
        <ContactMailIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {"chakradharbanda1998@gmail.com"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <LocationOnIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {"Bengaluru, Karnataka, India"}
        </Typography>
      </Box>
    </>
  );
}

export default function Footer() {
  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/chakradharbanda"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/chakradhar-banda-5960b0180/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
