import { DEVELOPERS } from "@fidyah/utils/constants";
import { Link, Stack, Typography } from "@mui/material";

const Dev = () => {
  return (
    <Stack component="ul" spacing={1} mt="1rem">
      {DEVELOPERS.map((dev, i) => (
        <Typography color="secondary" fontSize=".8rem" fontWeight={400} component="li" key={i}>
          <Link href={dev.github} target="_blank">
            {dev.name} ({dev.role})
          </Link>
        </Typography>
      ))}
    </Stack>
  );
};

export default Dev;
