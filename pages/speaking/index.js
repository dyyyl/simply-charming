import React from "react";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";
import SectionHeader from "components/SectionHeader";
import TalkList from "components/TalkList";

import "../../css/global.css";

class Speaking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: "description", content: "Dyl 🦊's Blog" },
            {
              name: "keywords",
              content: "blog, Dyl, 🦊, GraphQL, React, Apollo, Node",
            },
          ]}
        />

        <SectionHeader
          title="Speaking"
          subtitle="Check out some of my past talks, and where I'm speaking next!"
        />

        <TalkList />

        <div className="love">
          <span>Made with ❤️ in Montreal</span>
        </div>
      </div>
    );
  }
}

export default Speaking;
