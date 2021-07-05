import React, { Component } from "react";
import PropTypes from "prop-types";

class Crane extends Component {
  render() {
    const { crane } = this.props;
    return (
      <div>
        <p>{crane.content}</p>
      </div>
    );
  }
}

Crane.propTypes = {
    crane: PropTypes.object.isRequired
};
export default Crane;