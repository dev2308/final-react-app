import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Avatar, Button, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

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
      width: 128,
      height: 128,
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
  const {
      data={},
      onChipTypeChange
  } = prop;
  
  const {
    id = 1,
    imageTitle = "Linux Server 18.0",
    description = "Description",
    chipOptions = ["64-bit(x86)", "64-bit(ARM)"],
    
  } = data;

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
                <Typography gutterBottom variant="subtitle1">
                  {imageTitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
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
                        control={<Radio />}
                        label={item}
                      />
                    </div>
                  );
                })}
              </RadioGroup>
              <Button variant="contained" color="primary">
                Select
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

// {
//     id: 1,
//     imageTitle: "Linux Server 18.0",
//     description: "Description",
//     cost: "200$/hour",
//     chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
//   }
