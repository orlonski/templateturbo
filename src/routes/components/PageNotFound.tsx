import { Button, Grid, Tooltip, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

export function PageNotFound() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: (theme) => theme.palette.background.dark,
        my: -2,
        mx: -3,
        width: `calc(100% + 48px)`, //pra ignorar o espaçamento padrão
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: `100%`,
        }}
      >
        <Typography variant="h4">404</Typography>
        <Typography variant="subtitle1">
          Desculpe, esta página não existe ou está indisponível no momento
        </Typography>
        <Tooltip title="Retornar à página inicial">
          <Button
            color="secondary"
            aria-label="home"
            href="/"
            style={{ marginTop: 20 }}
          >
            <Home />
          </Button>
        </Tooltip>
      </div>
    </Grid>
  );
}
