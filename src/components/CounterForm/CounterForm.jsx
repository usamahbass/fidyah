import PropTypes from "prop-types";
import { styled } from "@mui/styles";
import { ButtonGroup, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
    },
    "& input": {
      textAlign: "center",
      width: 60,
      border: 0,
      fontSize: ".90rem",
    },
  },
  "&:hover": {
    borderColor: "initial",
  },
});

const CounterForm = ({ onChange, value, disabled }) => {
  const handleChange = (event) => {
    const value = event.target.value;

    if (value > 31) {
      return;
    }

    const result = Math.max(Number(value), 1);

    onChange(result);
  };

  return (
    <ButtonGroup>
      <Button
        size="small"
        disabled={value === 1 || disabled}
        onClick={() => onChange(value - 1)}
        sx={{
          borderRight: 0,
          "&:hover": {
            borderRight: 0,
          },
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <StyledInput
        disabled={disabled}
        size="small"
        onChange={handleChange}
        value={value}
      />
      <Button
        disabled={disabled || value === 31}
        size="small"
        onClick={() => onChange(value + 1)}
        sx={{
          borderLeft: 0,
          "&:hover": {
            borderLeft: 0,
          },
        }}
      >
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  );
};

CounterForm.defaultProps = {
  value: 0,
};

CounterForm.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CounterForm;
