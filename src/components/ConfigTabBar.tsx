import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageCard from './ImageCard';
import ImageList from './ImageList';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsCustomStyle: {
    background: "transparent",
    fontSize: "8 !important" ,
    color: "black",


  }
}));

export default function ConfigTabBar({onChipTypeChange, imageDetails}:any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabsCustomStyle} position="static">
        <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{fontSize: "8 !important"}} label="Choose Image" {...a11yProps(0)} />
          <Tab label="Choose Instance Type Two" {...a11yProps(1)} />
          <Tab label="Choose Storage and Networking" {...a11yProps(2)} />
          <Tab label="Configure Secutiry Group" {...a11yProps(3)} />
          <Tab label="Review and Launch" {...a11yProps(4)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ImageList onChipTypeChange={onChipTypeChange} imageDetails={imageDetails}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
