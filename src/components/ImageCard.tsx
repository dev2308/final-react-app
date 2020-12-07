import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Avatar, Button, FormControlLabel, Radio, RadioGroup,} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginTop: 8,
    },
    image: {
      width: 108,
      height: 108,
      marginRight: 15,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

export default function ImageCard(prop: any) {
  const classes = useStyles();

  const { data = {}, onChipTypeChange, region, costEstimator } = prop;

  const {
    id = 1,
    imageTitle = "Linux Server 18.0",
    description = "Description",
    chipOptions = ["64-bit(x86)", "64-bit(ARM)"],
    isWindows = false,
  } = data;

  function onImageSelect(data:any){
    console.log(data);
    costEstimator(data);
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src="/static/images/avatar/1.jpg"
              className={classes.image}
            />
          </Grid>
          <Grid item xs container>
            <Grid item xs={9} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom align="left" variant="h4">
                  {imageTitle}
                </Typography>
                <Typography align="left" variant="body1" gutterBottom>
                  {description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={3} container direction="column" spacing={2}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                defaultValue={0}
                onChange={onChipTypeChange}
              >
                {chipOptions.map((item: String) => {
                  return (
                    <div>
                      <FormControlLabel
                        value={item}
                        control={<Radio color="primary"/>}
                        label={item}
                      />
                    </div>
                  );
                })}
              </RadioGroup>
              <Button
                size="medium"
                variant="contained"
                disabled={region == "ap-south-1" && isWindows ? true : false}
                color="primary"
                onClick={()=>{onImageSelect({data})}}
              >
                Select
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
