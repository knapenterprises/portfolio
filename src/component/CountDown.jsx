
import { Box, Stack, Typography } from "@mui/material";
import  { useState, useEffect } from "react";

const CountdownTimer = ({ days }) => {
  const targetDate = new Date().getTime() + days * 24 * 60 * 60 * 1000; // Target time in milliseconds

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null; // Timer expired

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      if (!updatedTime) clearInterval(timer); // Stop the timer when expired
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  if (!timeLeft) return <h2>Timer expired!</h2>; // Render when timer ends

  return (
   <Box sx={{maxWidth: "100% " , display : "flex" , justifyContent: "center"} }>
     <Box display={"flex"} justifyContent={"space-between"}  sx={{width : { md : "50%" , xs : "80%" }}} alignItems={"center"}   color={"white"}>
    <Stack>
    <Typography component={"h1"} fontSize={"50px"}  lineHeight={1}>
      {timeLeft.days}
      </Typography>
      <Typography component={"h1"} fontSize={"30px"} lineHeight={1}>
        days
      </Typography>
    </Stack>
      <Stack>
      <Typography component={"h1"} fontSize={"50px"} lineHeight={1}>
      {timeLeft.hours}
      </Typography>
      <Typography component={"h1"} fontSize={"30px"} lineHeight={1}>
        hrs
      </Typography>
      </Stack>
     <Stack>
     <Typography component={"h1"} fontSize={"50px"}lineHeight={1} >
      {timeLeft.minutes}
      </Typography>
      <Typography component={"h1"}fontSize={"30px"} lineHeight={1}>
        min
      </Typography>
     </Stack>
     <Stack>
     <Typography component={"h1"} fontSize={"50px"} lineHeight={1}>
      {timeLeft.seconds}
      </Typography>
      <Typography component={"h1"} fontSize={"30px"} lineHeight={1}>
        sec
      </Typography>
     </Stack>
    </Box>
   </Box>
   
  );
};

export default CountdownTimer