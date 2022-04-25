import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React App to leave feedback for a product or service</p>

        <Link to="/">
          <p>Back to Home</p>
        </Link>
      </div>
    </Card>
  );
};

export default About;
