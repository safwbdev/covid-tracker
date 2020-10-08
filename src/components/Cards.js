import { CardContent, Grid, Typography, Card } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { cases, recovered, deaths, lastUpdate } }) => {
  if (!cases) {
    return "Loading";
  } else {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className="card infected" component={Card}>
          <CardContent>
            <Typography color="textSecondary">Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography> */}
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4} className="card recovered" component={Card}>
          <CardContent>
            <Typography color="textSecondary">Recoveries</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography> */}
            <Typography variant="body2">
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4} className="card deaths" component={Card}>
          <CardContent>
            <Typography color="textSecondary">Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography> */}
            <Typography variant="body2">
              Number of deaths by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    );
  }
};
export default Cards;
