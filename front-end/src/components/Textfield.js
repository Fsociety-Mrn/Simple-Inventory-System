import { TextField } from '@mui/material';
import { styled } from "@mui/material/styles";



export const Custom_Textfield = styled(TextField)({
  backgroundColor: "#FAEBCD",
  borderRadius: 4,
  "& label.Mui-focused": {
    color: "#434343",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#434343"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #434343"
    },
    "&:hover fieldset": {
      border: "2px solid #434343"
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #434343"
    }
  }
});

