import Box from "@mui/material/Box";

const LoadingGlobal = () => {
  return (
    <Box
      mx="auto"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <img width={300} src="/logo.png" alt="logo" />
    </Box>
  );
};

export default LoadingGlobal;
