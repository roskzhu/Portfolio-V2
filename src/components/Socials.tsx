import { Component } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Socials.css";


class SidebarNav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: any) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div className="sidebar-nav">
        <div className="sidebar-logos">
         <a href="mailto:rosannezhu@gmail.com" style={{color:'#0F0F0F'}}>
            <EmailRoundedIcon style={{ fontSize: 20, marginRight: '5px'  }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/roskzhu" style={{color:'#0F0F0F'}}>
            <GitHubIcon style={{ fontSize: 19, marginRight: '5px'  }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/rosanne-zhu" style={{color:'#0F0F0F'}}>
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
