import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { getCranes, deleteCranes } from "../../actions/cranes";
import Modal from "../cranes/Modal";

class CranesList extends Component {
  state = {
    modal: false,
  }

  componentDidMount() {
    this.props.getCranes();
  }

  showModal = (e) => {
    localStorage.setItem("craneItem", e.currentTarget.value);

    this.setState({ modal: true });
  }

  hideModal = () => {
    this.setState({ modal: false });
  }

  render() {
    // const { cranes } = this.props.cranes;

    // let items = cranes.map(crane => {
    //   return <Crane key={crane.id} crane={crane} />;
    // });

    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        <h1>---</h1>
        {this.props.cranes.map(cranes => (
          <div className='item' key={cranes.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='description'>{cranes.craneType}</a>
              <div className='description'>{cranes.registerNumber}</div>
              <button className="btn btn-md btn-primary" onClick={this.showModal} value={cranes.id}>Подробнее</button>
            </div>
          </div>
        ))}
        <Modal active={this.state.modal} hideModal={this.hideModal}/>
      </div>
    );
  }
}

CranesList.propTypes = {
  getCranes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cranes: state.cranes.cranes,
});

export default connect(mapStateToProps, {
  getCranes, deleteCranes
})(withRouter(CranesList));