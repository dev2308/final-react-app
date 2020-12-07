import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginLeft: 25,
    marginRight: 10,
    maxHeight: 300,
    minWidth: 300,
    marginTop: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  costEstimateBody: {
    marginTop: 20,
    alignItems: "left",
  },
});

export default function CostEstimateCard({totalEstimatedCost}:any) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card elevation={3} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Cost Estimate
        </Typography>

        <Typography
          className={classes.costEstimateBody}
          variant="body2"
          component="p"
        >
          Linux 2 image   243$
        </Typography>

        <Divider style={{marginTop: "140px"}}/>

        <Typography style={{alignContent: "right"}} component="b">0.00 $</Typography>
      </CardContent>
    </Card>
  );
}
