import * as React from "react";
import { InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "44px",
      lineHeight: "54px",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export default function InstanceType(params: any) {
  const [instanceTypes, setInstanceTypes] = React.useState([]);
  const [active1, setActive1] = React.useState(true);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  const [active4, setActive4] = React.useState(false);
  const classes = useStyles();

  const [memory, setMemory] = React.useState("");
  const onMemoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMemory(event.target.value as string);
  };

  const [cpuCore, setCpuCore] = React.useState("");
  const onCpuCoreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCpuCore(event.target.value as string);
  };

  const [cpuCoreData, setCpuCoreData] = React.useState({
    gp: ["1 Core", "2 Core", "4 Core"],
    strg: ["1 Core", "8 Core", "16 Core"],
    cmpt: ["1 Core", "2 Core", "8 Core", "16 Core"],
    ntwk: ["1 Core", "2 Core", "4 Core", "8 Core", "16 Core"],
  });

  const [memoryData, setMemoryData] = React.useState({
    gp: ["256 MB", "512 MB", "1 GB", "2 GB", "4 GB"],
    strg: ["16 GB", "32 GB", "64 GB"],
    cmpt: ["256 MB", "512 MB", "1 GB"],
    ntwk: ["256 MB", "512 MB", "1 GB", "2 GB", "4 GB", "16 GB", "32 GB", "64 GB"],
  });

  const [currentMemoryList, setCurrentMemoryList] = React.useState(cpuCoreData.gp);
  const [currentCpuCoreList, setCurrentCpuCoreList] = React.useState(memoryData.gp);


  const onClickCard1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setCurrentCpuCoreList(cpuCoreData.gp);
    setCurrentMemoryList(memoryData.gp);
  };

  const onClickCard2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setCurrentCpuCoreList(cpuCoreData.cmpt);
    setCurrentMemoryList(memoryData.cmpt);
  };

  const onClickCard3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setCurrentCpuCoreList(cpuCoreData.strg);
    setCurrentMemoryList(memoryData.strg);
  };

  const onClickCard4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setCurrentCpuCoreList(cpuCoreData.ntwk);
    setCurrentMemoryList(memoryData.ntwk);
  };

  return (
    <div className="parent-container">
      <div className="card-container">
        <div
          onClick={onClickCard1}
          className={active1 ? "active-cards" : "cards"}
        >
          <span className={active1 ? "active-card-text" : "card-text"}>
            General Purpose
          </span>
        </div>
        <div
          onClick={onClickCard2}
          className={active2 ? "active-cards" : "cards"}
        >
          <span className={active2 ? "active-card-text" : "card-text"}>
            CPU Optimised
          </span>
        </div>
        <div
          onClick={onClickCard3}
          className={active3 ? "active-cards" : "cards"}
        >
          <span className={active3 ? "active-card-text" : "card-text"}>
            Storage Optimised
          </span>
        </div>
        <div
          onClick={onClickCard4}
          className={active4 ? "active-cards" : "cards"}
        >
          <span className={active4 ? "active-card-text" : "card-text"}>
            Network Optimised
          </span>
        </div>
      </div>
      <div className="config-container ml-30">
        <span className="config-text">Create Configuration</span>
      </div>
      <div className="card-container mt-20">
        <div className="dropdown-1  ml-30">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Cpu Cores
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={cpuCore}
              onChange={onCpuCoreChange}
              label="CpuCore"
            >
              {currentCpuCoreList.map((data) => {
                return(<MenuItem value={data}>{data}</MenuItem>);
              })}
            </Select>
          </FormControl>
        </div>
        <div className="dropdown-1 ml-30" >
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Memory
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={memory}
              onChange={onMemoryChange}
              label="Memory"
            >
              {currentMemoryList.map((data) => {
                return(<MenuItem value={data}>{data}</MenuItem>);
            })}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
