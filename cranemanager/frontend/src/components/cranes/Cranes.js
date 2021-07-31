import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import PropTypes, { element } from 'prop-types';
import { getCranes, deleteCranes } from '../../actions/cranes';
import { getExamination } from '../../actions/examinationPeriodPassport';
import { cranes, examination } from '../../reducers/cranes';


export class Cranes extends Component {

    static propTypes = {
        getExamination: PropTypes.func.isRequired,
        getCranes: PropTypes.func.isRequired,
        deleteCranes: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getCranes();
        this.props.getExamination();
        // this.props.getPersonResponsibleToFixedState();
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
                                            <th>Post</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cranes.map(crane => (
                                            <tr key={crane.personResponsibleToFixedState.id}>
                                                <td>{crane.personResponsibleToFixedState.employeePost}</td>
                                                <td>{crane.personResponsibleToFixedState.employeeFirstName}</td>
                                                {/* <img src={crane.personResponsibleToFixedState.personImage} style={{width: 100, height: 100}} /> */}
                                                <Image src={crane.personResponsibleToFixedState.personImage} roundedCircle style={{ width: 100, height: 100 }} />
                                                <td className="btn-cranes"><Link className="btn btn-md btn-primary" to={`/${crane.id}/detail`}>Подробнее</Link></td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
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
    cranes: state.cranes.cranes,
    examination: state.cranes.examination,
});

export default connect(mapStateToProps, { getCranes, deleteCranes, getExamination })(Cranes);