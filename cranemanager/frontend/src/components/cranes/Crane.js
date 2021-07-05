import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateCranes, deleteCranes } from "../../actions/cranes";
import { Button } from "react-bootstrap";

class Crane extends Component {
  onDeleteClick = () => {
    const { crane } = this.props;
    this.props.deleteCranes(crane.id);
  };
  onUpdateClick = () => {
    const { crane } = this.props;
    this.props.updateCranes(crane.id, {
      craneType: crane.craneType.toUpperCase()
    });
  };
  render() {
    const { crane } = this.props;
    return (
      <div>
        <hr />
        <p>
          (id:{crane.id}) {crane.craneType}
        </p>
        <Button variant="secondary" size="sm" onClick={this.onUpdateClick}>
          Update
        </Button>{" "}
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

Crane.propTypes = {
  crane: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteCranes, updateCranes })(
  withRouter(Crane)
);