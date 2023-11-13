import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeIn";
import '../styles/WorkCard.css'

const isHorizontal: boolean = window.innerWidth < 600;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const backgroundImageStyle = {
    backgroundImage: `url('/assets/bluebg.png')`, // Replace with the path to your image
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    marginTop: '20px',
    paddingTop: '20px',
    borderRadius: '15px',
    paddingLeft: '25px',
    marginLeft: '0px'
  };

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
          <Box p={3} style={{ ...backgroundImageStyle,width:'80%' }}>
            <Typography>{children}</Typography>
            <p style={{ marginTop: '10px', color: 'gray' }}>
              text
            </p>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel`} {...other} >
        {value === index && (
          <Box p={3} 
          style={{ ...backgroundImageStyle }}
          >
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
    display: "flex",
    height: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '27%',
  },
}));

const Work: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const experienceItems: { 
    [key: string]: { 
      jobTitle: string; duration: string; desc: string[]; techStack: string; keyDesc?: string;
    } 
  } = {
    'BMO Financial Group': {
      jobTitle: "Software Engineer Intern",
      duration: "SEPT 2023 - PRESENT",
      desc: [
        "Currently working on the Digital Core AI team, helping with document verification to automate mortgage loans."      ],
      techStack: "Python, AWS, SQL, Flask, React.js, TypeScript, Redux",
      keyDesc: "Also known as the Bank of Montreal"
    },
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} 
    style={{ backgroundColor: '#1E1E1E',
            padding:'10px', borderRadius:'20px'}}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : undefined}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={i} label={
            <div>
            <div>
              {isHorizontal ? `0${i}.` : key}
            </div>
            <div style={{ fontSize: '12px', color: 'gray' }}>
              {isHorizontal ? `0${i}.` : experienceItems[key]["keyDesc"]}
            </div>
          </div>
          } 
          {...a11yProps(i)} 
              style={{ backgroundColor: value === i ? '#28292A' : 'transparent',
                       borderRadius:'15px' ,width:'100%'}}
          />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={i} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}<br />@ {" "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="job-description-container">
          <div className="vertical-line" 
            style={{borderLeft: '2px solid white', marginLeft:'60px', width:'10px', position: 'absolute'}}>
          </div>
          <div className="joblist-duration" style={{marginLeft:'90px'}}>
            {experienceItems[key]["duration"]}</div>
          <ul className="job-description"  style={{marginLeft:'60px', width:'65%', marginRight:'100%'}}>
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li style={{ color: 'white' }}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
          </div>          
          <FadeInSection delay='200ms'>
          <div className="card-tech" style={{textAlign:'left',marginLeft:'90px', fontStyle: 'italic'}}>
                    {experienceItems[key]["techStack"].split(", ").map((item: string, index: number) => (
                      <span key={index}>
                        {index > 0 ? " // " : ""}
                        {item}
                        {/* <mark>{item}</mark> */}
                      </span>
                    ))}
                  </div>
          </FadeInSection>
        </TabPanel>
      ))}
    </div>
  );
};

export default Work;
