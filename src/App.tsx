import React, { useState } from "react";
import "./App.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import ConfigTabBar from "./components/ConfigTabBar";
import CostEstimateCard from "./components/CostEstimateCard";
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 21,
      background: "#F4F5F8",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    title: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "35px",
      lineHeight: "54px",    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
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
      imageTitle: "Linux 2 Image",
      description: "Linux 2 comes with a 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance",
      cost: 243.61,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
      isWindows: false,
    },
    {
      id: 2,
      imageTitle: "Ubuntu Server 18.04 LTS",
      description: "Linux 2 comes with a 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance",
      cost: 243.61,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
      isWindows: false,

    },
    {
      id: 3,
      imageTitle: "Red Hat Enterprise Linux 8",
      description: "Linux 2 comes with a 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance",
      cost: 300,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
      isWindows: false,

    },
    {
      id: 4,
      imageTitle: "Microsoft Windows Server 2019 Base ",
      description: "Windows comes with a 4 years of support. It provides Windows kernel 6.14 tuned for optimal performance",
      cost: 338.77,
      chipOptions: [ "64-bit(ARM)"],
      isWindows: true,

    },
    {
      id: 5,
      imageTitle: "SUSE Linux Enterprise Server",
      description: "Linux 2 comes with a 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance",
      cost: 200.22,
      chipOptions: ["64-bit(x86)", "64-bit(ARM)"],
      isWindows: false,

    },
  ]);

  const [totalEstimatedCost, setTotalEstimatedCost] = React.useState(0);

  const [selectedImage, setSelectedImage] = React.useState({});

  const [region, setRegion] = React.useState("");
  const onRegionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
  };

  const [selectedChipType, setSelectedChipType] = React.useState("");
  const onChipTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChipType((event.target as HTMLInputElement).value);
  };

  function costEstimator(data :any){
    debugger
  }

  return (
    <div className="App">
      <header className="App-header">HVC</header>

      <div className={classes.root}>
        <Grid container xs={12} spacing={2} justify="space-between">
          <Grid container xs={9}>
            <Grid container>
              <Grid item xs={6}>
                <Typography className={classes.title}>Choose Image</Typography>
              </Grid>
              <Grid item xs={6} alignItems= "flex-end" alignContent="flex-end">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={region}
                    onChange={onRegionChange}
                    label="Region"
                  >
                    <MenuItem value={"us-east-1"}>us-east-1</MenuItem>
                    <MenuItem value={"us-east-2"}>us-east-2</MenuItem>
                    <MenuItem value={"ap-south-1"}>ap-south-1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <ConfigTabBar
              onChipTypeChange={onChipTypeChange}
              imageDetails={imageDetails}
              region={region}
              costEstimator={costEstimator}
            />
          </Grid>

          <Grid container xs={3}>
            <CostEstimateCard totalEstimatedCost={totalEstimatedCost}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
