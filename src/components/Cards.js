import { CardContent, Grid, Typography, Card } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  } else {
    return (
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={4} className="card infected" component={Card}>
            <CardContent>
              <Typography color="textSecondary">Infected</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4} className="card recovered" component={Card}>
            <CardContent>
              <Typography color="textSecondary">Recoveries</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4} className="card deaths" component={Card}>
            <CardContent>
              <Typography color="textSecondary">Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths by Covid-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default Cards;
