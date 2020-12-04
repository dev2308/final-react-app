import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginLeft: 25,
    marginRight: 10,
    maxHeight: 400,
    minWidth: 300,
    marginTop: 50,
},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  costEstimateBody:{
      marginTop:20,
  }

});

export default function CostEstimateCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card  elevation={3} className={classes.root}>
      <CardContent >
        
        <Typography variant="h5" component="h2">
          Cost Estimate
        </Typography>
       
        <Typography className={classes.costEstimateBody}variant="body2" component="p">
        Linux 2 image
        <Typography>
            243$</Typography> 
        </Typography>

        <Divider  light />

        <Typography  component="b">
          0.00 $
        </Typography>

      </CardContent>
      
    </Card>
  );
}
