import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes, { element } from 'prop-types';
import { getCranes, getExamination } from '../../actions/cranes';
import cranes from '../../reducers/cranes';
import examination from '../../reducers/cranes';
import Modal from './Modal';

export class Cranes extends Component {
    state = {
        modal: false,
    }

    static propTypes = {
        examination: PropTypes.array.isRequired,
        getExamination: PropTypes.func.isRequired,
        getCranes: PropTypes.func.isRequired,
        deleteCranes: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getExamination();
        this.props.getCranes();
    }

    showModal = (e) => {
        console.log(`trgv: ${e.target.value}`)
        console.log(`currtarg: ${e.currentTarget.value}`)
        localStorage.setItem("craneItem", e.currentTarget.value);
        alert(localStorage.getItem("craneItem"))
        this.setState({modal: true});
    }

    hideModal = () => {
        this.setState({modal: false});
    }

    renderComponent() {
        return (
            <div className="cranes">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mt-4 mb-4">
                            <h2>Cranes</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Crane Type</th>
                                            <th>metalInspection</th>
                                            <th>Manufacturer Factory</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.props.cranes.map(cranes => (
                                            <tr key={cranes.id}>
                                                <td>wasd: {cranes.id}</td>
                                                <td className="btn-cranes"><button className="btn btn-md btn-primary" onClick={this.showModal} value={cranes.id}>Подробнее</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {/* <tbody>
                                        { this.props.cranes.map(cranes => (
                                            <tr key={cranes.id}>
                                                <td>{cranes.id}</td>
                                                <td>{cranes.craneType}</td>
                                            </tr>
                                        )) }
                                    </tbody> */}
                                </table>
                            </div>
                         </div>
                    </div>
                </div>
                <Modal active={this.state.modal} hideModal={this.hideModal}/>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderComponent()}
            </> 
        )
    }
}

const mapStateToProps = state => ({
    examination: state.cranes.examination,
    cranes: state.cranes.cranes
});

export default connect(mapStateToProps, { getExamination, getCranes })(Cranes);