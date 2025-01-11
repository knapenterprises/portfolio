import {  Typography } from "@mui/material";
import { Box, Stack,  } from "@mui/system";
import rightBg from "../assets/rightbg.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import toy from "../assets/toy3.jpg";
import Tshirt from "../assets/tshirt.jpg";
const About = () => {
  return (
    <Box id="about"
        sx={{
          height: {
            xs: "80vh", 
            md: "100vh",
          },
    background: `url(${rightBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden", 
   
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",

      zIndex: 1,
    },
        }}
      >
      <Box 
      sx={{
        position: "relative",
      zIndex: 2,
      color: "black"
      }}
      >
      <Typography
          textTransform={"uppercase"}
          component={"h2"}
          fontSize={"40px"}
          mt={5}
          textAlign={"center"}
        >
          About
        </Typography>
        <Box sx={{height:"1px", width: "50px", background : "black" , textAlign : "center" , margin : "30px auto"}}></Box>
        <Stack textAlign={"center"}>
          We launch our new website soon.
          <br />
          Please stay updated and follow.
        </Stack>
        <Stack display={"flex"} gap={"10px"} justifyContent={"center"} direction={"row"} mt={5}>
<WhatsAppIcon/>
<FacebookIcon/>
<InstagramIcon/>
        </Stack>
    <Box>
      <Stack display="flex" direction="row" mt={16} width="100%">
        <Box className="hover-container" width="50%" height="300px">
          <img src={toy} alt="Toy" className="image" />
          <div className="overlay">
            <p className="text">Innovative Toy </p>
          </div>
        </Box>
        <Box className="hover-container" width="50%" height="300px">
          <img src={Tshirt} alt="T-shirt" className="image" />
          <div className="overlay">
            <p className="text"> Printed T-shirt </p>
          </div>
        </Box>
      </Stack>
    </Box>
      </Box>
      </Box>
    
  )
}

export default About