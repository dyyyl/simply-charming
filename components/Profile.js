import React from "react";
import { config } from "config";
import { prefixLink } from "gatsby-helpers";
import { Link } from "react-router";
import mePic from "./me.jpg";

import "../css/profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0.0,
      direction: 0.1,
    };
    this.animationRequestId = null;
  }

  componentDidMount() {
    this.animationRequestId = window.requestAnimationFrame(
      this.animateX.bind(this),
    );
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationRequestId);
  }

  animateX() {
    this.setState(() => {
      return {
        x: (Math.random() * 10).toFixed(1),
      };
    });

    window.setTimeout(() => {
      window.requestAnimationFrame(this.animateX.bind(this));
    }, 800);
  }

  render() {
    return (
      <header className="me">
        <div className="me__photo">
          <img src={mePic} alt="Dyl 🦊's Photo" className="me__photo__avatar" />
        </div>

        <div className="me__profile">
          <h1 className="me__profile__name">Simple & Charming ✨</h1>
          <h2 className="me__profile__desc">
            <span className="purple">{this.state.x}x</span> full stack engineer
            for hire - GraphQL Enthusiast - Speaker.
          </h2>

          <p>
            Feel free to{" "}
            <a href="https://github.com/dyyyl">check out my code</a> 🚀
          </p>

          <p>
            Follow me on <a href="https://twitter.com/dyyyyyyyyyl">Twitter</a>{" "}
            🐦
          </p>

          <p>
            Check out where I'm{" "}
            <Link to={prefixLink("/speaking/")}>speaking next</Link> 📢
          </p>
        </div>
      </header>
    );
  }
}

export default Profile;
