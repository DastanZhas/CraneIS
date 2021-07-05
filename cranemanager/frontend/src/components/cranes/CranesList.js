import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCranes } from "../../actions/cranes";

import Crane from "./Crane";

class CranesList extends Component {
  componentDidMount() {
    this.props.getCranes();
  }

  render() {
    const { cranes } = this.props.cranes;

    let items = cranes.map(crane => {
      return <Crane key={crane.id} crane={crane} />;
    });

    return (
      <div>
        <h2>Cranes</h2>
        {items}
      </div>
    );
  }
}

CranesList.propTypes = {
  getCranes: PropTypes.func.isRequired,
  cranes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cranes: state.cranes
});

export default connect(mapStateToProps, {
    getCranes
})(withRouter(CranesList));