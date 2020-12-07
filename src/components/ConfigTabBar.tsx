import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageCard from "./ImageCard";
import ImageList from "./ImageList";
import InstanceType from "./InstanceType";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsCustomStyle: {
    background: "transparent",
    fontSize: "8 !important",
    color: "black",
  },
}));

export default function ConfigTabBar({
  onChipTypeChange,
  imageDetails,
  region,
  costEstimator,
}: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar className={classes.tabsCustomStyle} position="static">
 
      </AppBar> */}

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#A0A4A8",
            fontFamily: "Montserrat",
          },
        }}
        aria-label="string"
        variant="fullWidth"
        indicatorColor="primary"
      >
        <Tab
          style={{ fontSize: "2" }}
          label="Choose Image"
        />
        <Tab label="Choose Instance Type" />
        <Tab label="Choose Storage and Network" />
        <Tab label="Configure Secutiry Group" />
        <Tab label="Review and Launch" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ImageList
            onChipTypeChange={onChipTypeChange}
          imageDetails={imageDetails}
          region={region}
          costEstimator={costEstimator}          
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InstanceType />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}
