import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Custom_Button = styled(Button)({
    boxShadow: "none",
    width: 200,
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1.5px solid",
    lineHeight: 2,
    backgroundColor: "#FAEBCD",
    borderColor: "#434343",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#434343",
      borderColor: "#FAEBCD",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#F7C873",
      borderColor: "#434343"
    }
  });
  
export const Custome_button_2 = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "2px solid",
    lineHeight: 1.5,
    backgroundColor: "#F7C873",
    borderColor: "black",
    color: "black",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#BF9000",
      border: "2px solid black",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#BF9000",
      borderColor: "black"
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: "#BF9000",
      borderColor: "black"
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  });
  