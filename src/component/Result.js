import React from "react";
import PropTypes from "prop-types";

import "./Result.css";

export default class Result extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-result">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
