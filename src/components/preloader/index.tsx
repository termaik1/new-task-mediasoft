import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Loader } from "app/ui-kit/loader";

const Preloader = () => (
  <Box sx={{ pt: 4 }}>
    <Grid container justifyContent="center">
      <Loader />
    </Grid>
  </Box>
);

export default Preloader;
