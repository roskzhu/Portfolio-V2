import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeIn";

const isHorizontal: boolean = window.innerWidth < 600;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel`} {...other}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Work: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const experienceItems: { [key: string]: { jobTitle: string; duration: string; desc: string[]; techStack: string; } } = {
    BMO: {
      jobTitle: "Software Engineer Intern @",
      duration: "SEPT 2023 - PRESENT",
      desc: [
        "Currently working on the Digital Core AI team, helping with document verification to automate mortgage loans."      ],
      techStack: "Python, AWS, SQL, Flask, React.js, TypeScript, Redux",
    },
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : undefined}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={i} value={value} index={i}>
          <span className="joblist-job-title">{experienceItems[key]["jobTitle"] + " "}</span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key]["duration"]}</div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
          <div className="card-tech">
                    {experienceItems[key]["techStack"].split(", ").map((item: string, index: number) => (
                      <span key={index}>
                        {index > 0 ? " " : ""}
                        <mark>{item}</mark>
                      </span>
                    ))}
                  </div>
        </TabPanel>
      ))}
    </div>
  );
};

export default Work;
