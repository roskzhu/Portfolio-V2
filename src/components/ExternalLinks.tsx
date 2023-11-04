import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

interface ExternalLinksProps {
  githubLink: string;
  openLink?: string;
}

interface ExternalLinksState {
  expanded: boolean;
  activeKey: string;
}

class ExternalLinks extends Component<ExternalLinksProps, ExternalLinksState> {
  constructor(props: ExternalLinksProps) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <span className="external-links" style={{marginRight: "10px"}}>
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "grey"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "grey"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
