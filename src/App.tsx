import React, { useState } from "react";
import logo from "./logo.svg";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import ServerImageCard from "./components/Card";
import RegionDropdown from "./components/RegionDropdown";
import ImageCard from "./components/ImageCard";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import ConfigTabBar from "./components/ConfigTabBar";
import CostEstimateCard from "./components/CostEstimateCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 40,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    title: {},
  })
);

function App() {
  const classes = useStyles();

  const [tabs, setTabs] = React.useState([
    {
      id: 1,
      title: "Choose Image",
    },
    {
      id: 2,
      title: "Choose Instance Type",
    },
    {
      id: 3,
      title: "Choose Storage and Network",
    },
    {
      id: 4,
      title: "Configure Security",
    },
    {
      id: 5,
      title: "Review and Launch",
    },
  ]);

  const [imageDetails, setImageDetails] = useState([
    {
      id: 1,
      imageTitle: "Linux Server 18.0",
      description: "Description",
      cost: 200,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
    },
    {
      id: 2,
      imageTitle: " Red Hat Enterprise Linux 8",
      description: "Description",
      cost: 243,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
    },
    {
      id: 3,
      imageTitle: "Linux Server 18.0",
      description: "Description",
      cost: 189,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
    },
    {
      id: 4,
      imageTitle: "Red Hat Enterprise Linux 8",
      description: "Description",
      cost: 213,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
    },
  ]);

  const [totalEstimatedCost, setTotalEstimatedCost] = React.useState(0);

  const [region, setRegion] = React.useState("");
  const onRegionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
  };

  const [selectedChipType, setSelectedChipType] = React.useState("");
  const onChipTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChipType((event.target as HTMLInputElement).value);
  };

  return (
    <div className="App">
      <header className="App-header">HVC</header>

      <div className={classes.root}>
        <Grid container spacing={2} justify="space-between">
          <Grid container xs={9}>
            <Grid container>
              <Grid item xs={6}>
                <Typography className={classes.title}>Choose Image</Typography>
              </Grid>
              <Grid item xs={6} alignContent="flex-end">
                <InputLabel id="demo-simple-select-outlined-label">
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={region}
                  onChange={onRegionChange}
                  label="Age"
                >
                  <MenuItem value={"us-east-1"}>us-east-1</MenuItem>
                  <MenuItem value={"us-east-2"}>us-east-2</MenuItem>
                  <MenuItem value={"ap-south-1"}>ap-south-1</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <ConfigTabBar
              onChipTypeChange={onChipTypeChange}
              imageDetails={imageDetails}
            />
          </Grid>

          <Grid container xs={3}>
            <CostEstimateCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
