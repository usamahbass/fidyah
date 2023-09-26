import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useHeaderStyles } from "./_styles";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const classes = useHeaderStyles();

  const handlePrevPage = () => navigate(-1);

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.headerContent}>
        <IconButton
          size="small"
          sx={{ marginRight: "1.2rem" }}
          onClick={handlePrevPage}>
          <ArrowBack fontSize="1rem" sx={{ color: "white" }} />
        </IconButton>

        <Typography color="white">{title}</Typography>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
