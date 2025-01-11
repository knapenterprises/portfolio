import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import rightBg from "../assets/rightbg.jpg";
import {useState} from "react";
import {  toast } from 'react-toastify';
const Contact = () => {
const [data, setData] = useState({
 name : "",
 email : "",
 message : "",
 error : {
  name : "",
  email : "",
  message : "",
 }
})

const getData = (e) => {
 let {name , value} = e.target;
 setData((prev) => ({
  ...prev,
  [name] : value
}))
}

const onHandleCheck = () => {
  let hasError = false;

 
  setData((prev) => ({
      ...prev,
      error: { name: "", email: "", message: "" }
  }));

  // Name Validation
  if (data.name.trim().length < 2) {
      setData((prev) => ({
          ...prev,
          error: { ...prev.error, name: "Please enter a valid name (at least 2 characters)" }
      }));
      hasError = true;
  }

  // Email Validation
  const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVerification.test(data.email.trim())) {
      setData((prev) => ({
          ...prev,
          error: { ...prev.error, email: "Please enter a valid email" }
      }));
      hasError = true;
  }

 

  if (data.message.trim().length < 5) {
    setData((prev) => ({
        ...prev,
        error: { ...prev.error, message: "Please write the message" }
    }));
    hasError = true;
}
  if (!hasError) {
    console.log("Wefefef")
    toast.success('Message Successfully Sent', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};
console.log(data)
  return (
    <>
      <Box
        id="contact"
        sx={{
          height: {
            xs: "100vh", 
            md: "100vh",
          },
    background: `url(${rightBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px 40px",
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
      color: "black",
      width: {
        sm: "80%", 
        md: "65%",
      },
      margin : "auto"
      }}
      >
      <Typography
          textTransform={"uppercase"}
          component={"h2"}
          fontSize={"40px"}
          
          sx={{marginTop : {
            xs : 2,
            md : 8
          }}}
          textAlign={"center"}
        >
          Contact
        </Typography>
            <Box sx={{height:"1px", width: "50px", background : "black" , textAlign : "center" , margin : "30px auto"}}></Box>
        <Stack textAlign={"center"}>
          We launch our new website soon.
          <br />
          Please stay updated and follow.
        </Stack>
        <Box py={2}>
          <TextField
            id="standard-basic"
            fullWidth
            name="name"
            value={data.name}
            onChange={getData}
            label="Name"
            variant="standard"
          />
          <Typography sx={{color:"red" , fontSize :"15px"  , fontWeight : "700"}}>{data.error.name}</Typography>
        </Box>
        <Box py={2}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Email"
            name="email"
            value={data.email}
            variant="standard"
            onChange={getData}
          />
            <Typography sx={{color:"red" , fontSize :"15px"  , fontWeight : "700"}}>{data.error.email}</Typography>
        </Box>
        <Box py={2}>
          <TextField
            id="message"
            fullWidth
            label="Message"
           name="message"
           value={data.message}
            variant="standard"
            rows={4}
            onChange={getData}
            maxRows={4}
            multiline
            sx={{background : "white" , padding : "10px" , border : "1px solid gray" ,

              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "none !important",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none",
              },
             }}
          />
            <Typography sx={{color:"red" , fontSize :"15px"  , fontWeight : "700"}}>{data.error.message}</Typography>
        </Box>

        <Stack sx={{width: {
                xs: "50%", 
                md: "30%",
              }, margin: "30px auto" }}>
          <button className="boton-elegante" onClick={onHandleCheck} >Explore</button>
        </Stack>

      </Box>
      </Box>
    </>
  );
};

export default Contact;
