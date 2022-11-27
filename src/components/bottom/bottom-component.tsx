import { Container, Stack } from "@mui/material";

export function BottomComponent() {
  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop={8}
        sx={{ borderTop: 1, borderColor: "#c8c8c8" }}
        height="30vh"
        bgcolor="#efefef84"
      >

      </Stack>
    </Container>
  );
}
