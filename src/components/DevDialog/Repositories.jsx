import { REPOSITORIES } from "@fidyah/utils/constants";
import { Link, Stack, Typography } from "@mui/material";
import { useDevDialogStyles } from "./_styles";

const Repositories = () => {
  const classes = useDevDialogStyles();

  return (
    <Stack className={classes.ulLists} component="ul" spacing={1} mt="1rem">
      {REPOSITORIES.map((repo, i) => (
        <Typography
          color="secondary"
          fontSize=".8rem"
          fontWeight={400}
          component="li"
          key={i}>
          <Link href={repo.github} target="_blank">
            {repo.name}
          </Link>
        </Typography>
      ))}
    </Stack>
  );
};

export default Repositories;
