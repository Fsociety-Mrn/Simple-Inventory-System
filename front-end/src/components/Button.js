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
  