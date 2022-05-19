import { TextField } from '@mui/material';
import { styled } from "@mui/material/styles";



export const Custom_Textfield = styled(TextField)({
  backgroundColor: "#FAEBCD",
  borderRadius: 15,
  "& label.Mui-focused": {
    color: "#434343",
  },
  "& .MuiInput-underline:after": {
    borderRadius: 15,
    borderBottomColor: "#434343"
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 15,
      border: "2px solid #434343"
    },
    "&:hover fieldset": {
      borderRadius: 15,
      border: "2px solid #434343"
    },
    "&.Mui-focused fieldset": {
      borderRadius: 15,
      border: "2px solid #434343"
    }
  }
});

