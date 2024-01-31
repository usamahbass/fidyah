import Helmet from "react-helmet";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return <Helmet title={`${title} - Fidyahku`} />;
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
