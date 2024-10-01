import { Box, Fade, Typography, IconButton } from "@mui/material";
import { CircleRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ShowSwitchInfo = () => {
  const [sliderData, setSliderData] = useState([
    {
      title: "Information 1",
      description: "Description about the information 1.",
      selected: true,
    },
    {
      title: "Information 2",
      description: "Description about the information 2.",
      selected: false,
    },
    {
      title: "Information 3",
      description: "Description about the information 3.",
      selected: false,
    },
  ]);

  const handleClickSlider = (index) => {
    const updatedSliderData = [...sliderData];
    updatedSliderData[index].selected = true;
    updatedSliderData.forEach((item, i) => {
      if (i !== index) item.selected = false;
    });
    setSliderData(updatedSliderData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = sliderData.findIndex((item) => item.selected);
      const nextIndex = (currentIndex + 1) % sliderData.length;
      handleClickSlider(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderData]);

  return (
    <Box
      sx={{
        backgroundImage:
          "url(http://localhost:5173/src/assets/images/auth_image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
        padding: 4,
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        color: "white",
      }}
    >
      {sliderData.map((item) => (
        <Fade key={item.title} in={item.selected} timeout={1000}>
          <Box
            textAlign={"center"}
            style={{ display: item.selected ? "block" : "none" }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "semi-bold" }}
              gutterBottom
            >
              {item.description}
            </Typography>
          </Box>
        </Fade>
      ))}

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {sliderData.map((item, index) => (
          <IconButton
            key={item.title}
            sx={{ color: sliderData[index].selected ? "white" : "auto" }}
            onClick={() => handleClickSlider(index)}
          >
            <CircleRounded />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default ShowSwitchInfo;
