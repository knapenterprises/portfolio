import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img1 from "../assets/bg1.jpg";
import logo from "../assets/logo2.png";
import CountdownTimer from "./CountDown";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const Hero = () => {
  const [activeLink, setActiveLink] = useState("#about"); // Default active link

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Grid container color={"white"}>
        {/* Left Section with Background */}
        <Grid item size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              height: {
                xs: "75vh",
                md: "100vh",
              },
              width: {
                sm: "100%",
                md: "50%",
              },
              background: `url(${img1})`,
              position: {
                sm: "relative",
                md: "fixed",
              },
              top: 0,
              left: 0,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
            }}
          >
            {/* Black Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: "20px",
                width: "100%",
                height: {
                  xs: "75vh",
                  md: "100vh",
                },
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                zIndex: 1,
              }}
            />

            {/* Top Navigation */}
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                position: "relative",
                zIndex: 2,
                color: "#fff",
                width: "100%",

                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                },
              }}
            >
              <Typography
                textTransform={"uppercase"}
                component={"a"}
                href="#about"
                color="#fff"
                sx={{
                  textDecoration: "none",
                  paddingBottom: "8px",
                  borderBottom:
                    activeLink === "#about" ? "2px solid #fff" : "none",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("#about")}
              >
                About
              </Typography>
              <Typography
                textTransform={"uppercase"}
                component={"a"}
                href="#contact"
                color="#fff"
                sx={{
                  textDecoration: "none",
                  paddingBottom: "8px",
                  borderBottom:
                    activeLink === "#contact" ? "2px solid #fff" : "none",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("#contact")}
              >
                Contact
              </Typography>
            </Box>

            {/* Main Content */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                marginTop: "10%",
                color: "#fff",
              }}
            >
              {/* Countdown Timer */}
              <Typography variant="h4" mb={4}>
                <CountdownTimer days={15} />
              </Typography>

              {/* Logo and Text */}
              <Container>
                <Box>
                  <Typography>
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ height: "90px", width: "150px" }}
                    />
                  </Typography>

                  <Typography
                    textTransform={"uppercase"}
                    sx={{ fontSize: { md: "30px", xs: "24px" } }}
                    fontWeight={300}
                  >
                    Before launching our
                  </Typography>
                  <Typography
                    textTransform={"uppercase"}
                    sx={{ fontSize: { md: "30px", xs: "24px" } }}
                    fontWeight={700}
                  >
                    New Website
                  </Typography>

                  <Typography
                    sx={{ fontSize: { md: "15px", xs: "18px" } }}
                    mt={6}
                  >
                    We are coming soon! Awesome template to present your future
                    product or service.
                    <Typography sx={{ fontSize: { md: "15px", xs: "18px" } }}>
                      We are working hard to give you the best experience!
                    </Typography>
                  </Typography>

                  {/* Notify Button */}
                  <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                    mt={6}
                  >
                    <button className="button-self">
                      <span>Notify me</span>
                    </button>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item size={{ sm: 12, md: 6 }} color={"black"}>
          <About />
          <Contact />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
