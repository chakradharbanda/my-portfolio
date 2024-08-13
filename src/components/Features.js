import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Senior Systems Engineer | July 2023 - Present",
    description:
      "Infosys Bengaluru, Karnataka, India | Horizon Digital Platform",
    points: [
      "Integrated RESTful APIs",
      "Enhanced scalability across 4 sub-organizations",
      "Managed sites across over 100 locations in the USA",
      "Analyzed complex code structures",
      "Identified and resolved performance defects",
      "Optimized large datasets into BLOBs",
      "Reduced image and video load times by 25%",
      "Improved browser performance",
      "Implemented offline functionality",
      "Boosted user satisfaction by 35%",
      "Conducted code reviews and knowledge transfer sessions",
      "Upheld Agile SCRUM methodology",
    ],
    imageLight: "null",
    imageDark: "null",
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Systems Engineer | May 2021 - June 2023",
    description:
      "Infosys Bengaluru, Karnataka, India | Horizon Digital Platform",
    points: [
      "Delivered 4 progressive web applications",
      "Improved performance by 30% with offline data store management",
      "Enhanced click reduction design",
      "Streamlined user experience",
      "Created and modified 15+ reusable components",
      "Ensured bug-free code and adherence to standards",
      "Implemented complex forms using Angular Reactive Forms",
      "Enhanced user input interactions by 20%",
      "Integrated custom features related to camera, PDFs, excels",
      "Managed data with third-party libraries",
      "Proficient in Git and GitHub for version control",
    ],
    imageLight: "null",
    imageDark: "null",
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Smart Inventory Management System",
    description:
      "Developed a responsive Inventory Management System using Angular and Spring Boot",
    points: [
      "CRUD operations for products",
      "CRUD operations for categories",
      "JWT-based user authentication",
      "Secure login and access control",
      "Spring Boot for backend API development",
      "Angular 17 for dynamic frontend interface",
    ],
    imageLight: `url(${process.env.PUBLIC_URL}/product.png)`,
    imageDark: `url(${process.env.PUBLIC_URL}/product.png)`,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Hands-on experienced for 3 years as an Angular front-end developer
              in Agile lifecycle with a proven record to build progressive web
              applications. Excited to leverage excellent technical skill to
              build high quality and efficient technology solutions. Recognized
              for consistently high performance, achieving an outstanding rating
              of 4 out of 4 from managers.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            >
              {items[selectedItemIndex].points?.map((line) => (
                <Box
                  key={line}
                  sx={{
                    py: 1,
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      width: 20,
                      color: "primary.main",
                    }}
                  />
                  <Typography component="text" variant="subtitle2">
                    {line}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            >
              {items[selectedItemIndex].points?.map((line) => (
                <Box
                  key={line}
                  sx={{
                    py: 1,
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      width: 20,
                      color: "primary.main",
                    }}
                  />
                  <Typography component="text" variant="subtitle2">
                    {line}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
