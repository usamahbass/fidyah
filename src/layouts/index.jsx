import { Box } from "@mui/material";
import { useLayoutStyles } from "./_styles";
import PropTypes from "prop-types";

const FidyahLayout = ({ children, isScreen }) => {
  const classes = useLayoutStyles();
  return (
    <Box height="auto">
      <Box className={classes.container}>
        <Box p="1rem" pb="2rem" height={isScreen ? "100vh" : "100%"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

FidyahLayout.propTypes = {
  children: PropTypes.node,
  isScreen: PropTypes.bool,
};

export default FidyahLayout;
