import { Box } from "@mui/material";
import { useLayoutStyles } from "./_styles";
import PropTypes from "prop-types";
import PageTitle from "@fidyah/components/PageTitle";
import Header from "@fidyah/components/Header";

const FidyahLayout = ({ children, title, withBackHeader, bottomNavigation }) => {
  const classes = useLayoutStyles();

  return (
    <>
      <PageTitle title={title} />

      {withBackHeader && <Header title={title} />}

      <Box className={classes.container}>
        <Box
          position="relative"
          top={withBackHeader ? "60px" : "0"}
          py="1rem"
          px="1rem"
          pb="12rem"
          height="100%">
          {children}
        </Box>

        {bottomNavigation}
      </Box>
    </>
  );
};

FidyahLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  withBackHeader: PropTypes.bool,
  bottomNavigation: PropTypes.node
};

export default FidyahLayout;
