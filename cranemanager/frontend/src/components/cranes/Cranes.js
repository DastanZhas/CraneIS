import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCranes, deleteCranes } from '../../actions/cranes';
import cranes from '../../reducers/cranes';

export class Cranes extends Component {
    static propTypes = {
        cranes: PropTypes.array.isRequired,
        getCranes: PropTypes.func.isRequired,
        deleteCranes: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCranes();
    }

    render() {
        return (
            <Fragment>
                <h2>Cranes</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Crane Type</th>
                            <th>Load Capacity</th>
                            <th>Manufacturer Factory</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cranes.map(cranes =>  (
                            <tr key={cranes.id}>
                                <td>{cranes.id}</td>
                                <td>{cranes.craneType}</td>
                                <td>{cranes.loadCapacity}</td>
                                <td>{cranes.factoryManufacturer}</td>
                                <td><button onClick={this.props.deleteCranes.bind(this, cranes.id)} className="btn btn-danger brn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cranes: state.cranes.cranes
});

export default connect(mapStateToProps, { getCranes, deleteCranes })(Cranes);