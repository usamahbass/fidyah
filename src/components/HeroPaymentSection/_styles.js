import { makeStyles } from "@mui/styles";

export const useHeroPaymentSectionStyles = makeStyles((theme) => ({
  content: {
    marginBottom: "5rem",
    alignItems: "center",
    position: 'relative',
    height: '400px',
    backgroundColor: theme.palette.primary[theme.palette.mode],
  },
  contentImage: {
    objectFit: 'cover',
    width: '60%',
    maxHeight: '400px',
    position: 'absolute',
    right: '0',
    bottom: '75px'
  },
  overlayBox: {
    borderRadius: '0.375rem',
    border: '1px',
    minHeight: '122px',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '-55px',
    width: 'calc(100% - 32px)!important',
    boxShadow: '0 2px 8px 1px hsla(0,0%,60%,.2) !important'
  },
  overlayBoxImage: {
    width: '130px',
    position: 'absolute',
    right: '20px',
    bottom: '-50px',
    objectFit: 'cover'
  }
}));
