import { Avatar, Stack, Typography } from "@mui/material";

export interface IPerson {
  name: string;
  avatarUrl: string;
  description: string;
}

export function PersonComponent({ name, avatarUrl, description }: IPerson) {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ maxWidth: 120, minWidth: 60 }}>
      <Avatar alt={name} src={avatarUrl || "/broken-image.jpg"} />
      <Typography maxWidth="80%" textAlign="center">
        {name}
      </Typography>
      <Typography variant="caption">{description}</Typography>
    </Stack>
  );
}
