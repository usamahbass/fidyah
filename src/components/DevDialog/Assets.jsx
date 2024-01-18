import { ASSETS } from "@fidyah/utils/constants";
import { Link, Stack, Typography } from "@mui/material";
import { useDevDialogStyles } from "./_styles";

const Assets = () => {
  const classes = useDevDialogStyles();

  return (
    <Stack className={classes.ulLists} component="ul" spacing={1} mt="1rem">
      {ASSETS.map((asset, i) => (
        <Typography
          color="secondary"
          fontSize=".8rem"
          fontWeight={400}
          component="li"
          key={i}>
          <Link href={asset.link} target="_blank">
            {asset.name}
          </Link>
        </Typography>
      ))}
    </Stack>
  );
};

export default Assets;
