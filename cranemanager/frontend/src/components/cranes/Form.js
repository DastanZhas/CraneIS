import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { element } from 'prop-types';
import { addCranes } from '../../actions/cranes';
import examination from '../../reducers/cranes';
import to1 from '../../reducers/cranes';
import { addExamination, getExamination } from '../../actions/examinationPeriodPassport';
import { getTo1 } from '../../actions/to1';
import { getTo2 } from '../../actions/to2';
import { getInspection } from '../../actions/inspection';
import { getPersonResponsibleToFixedState } from '../../actions/personResponsibleFixedState';
import { getPersonResponsibleSupervision } from '../../actions/personResponsibleSupervision'

export class Form extends Component {
    state = {
        craneType: "",
        loadCapacity: "",
        registerNumber: "",
        factoryNumber: "",
        inventorizationNumber: "",
        factoryManufacturer: "",
        examinationPeriod: "",
        workMode: "",
        installationPlace: "",
        technicalMaintenanceFirst: "",
        technicalMaintenanceSecond: "",
        inspection: "",
        personResponsibleToFixedState: "",
        personResponsibleForSupervision: "",
        metalInspection: "",
        mechanicalControl: "",
        electricalParts: "",
        owner: ""
    }

    static propTypes = {
        addCranes: PropTypes.func.isRequired,
        addExamination: PropTypes.func.isRequired,
        getExamination: PropTypes.func.isRequired,
        getTo1: PropTypes.func.isRequired,
        getTo2: PropTypes.func.isRequired,
        getInspection: PropTypes.func.isRequired,
        getPersonResponsibleToFixedState: PropTypes.func.isRequired,
        getPersonResponsibleSupervision: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getExamination();
        this.props.getTo1();
        this.props.getTo2();
        this.props.getInspection();
        this.props.getPersonResponsibleToFixedState();
        this.props.getPersonResponsibleSupervision();
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {
            craneType, loadCapacity, registerNumber, factoryNumber, inventorizationNumber, factoryManufacturer, examinationPeriod,
            workMode, installationPlace, technicalMaintenanceFirst, technicalMaintenanceSecond, inspection, personResponsibleToFixedState,
            personResponsibleForSupervision, metalInspection, mechanicalControl, electricalParts, owner
        } = this.state;

        const crane = {
            craneType, loadCapacity, registerNumber, factoryNumber, inventorizationNumber, factoryManufacturer, examinationPeriod,
            workMode, installationPlace, technicalMaintenanceFirst, technicalMaintenanceSecond, inspection, personResponsibleToFixedState,
            personResponsibleForSupervision, metalInspection, mechanicalControl, electricalParts, owner
        };
        // const examinationInsert = {
        //     technicalPassportdownloadUrl, examinationPeriodDate
        // }

        this.props.addCranes(crane);
        this.props.addExamination(examinationInsert);

        this.setState({
            craneType: "",
            loadCapacity: "",
            registerNumber: "",
            factoryNumber: "",
            inventorizationNumber: "",
            factoryManufacturer: "",
            examinationPeriod: "",
            workMode: "",
            installationPlace: "",
            technicalMaintenanceFirst: "",
            technicalMaintenanceSecond: "",
            inspection: "",
            personResponsibleToFixedState: "",
            personResponsibleForSupervision: "",
            metalInspection: "",
            mechanicalControl: "",
            electricalParts: "",
            owner: ""
        });
    }

    renderComponent() {
        const {
            craneType, loadCapacity, registerNumber, factoryNumber, inventorizationNumber, factoryManufacturer, examinationPeriod,
            workMode, installationPlace, technicalMaintenanceFirst, technicalMaintenanceSecond, inspectionInsert, personResponsibleToFixedStateInsert,
            personResponsibleForSupervisionInsert, metalInspection, mechanicalControl, electricalParts, owner
        } = this.state;

        return (
            <div className="container">
                <form className="row">
                    <div className="col-xl-12">
                        <div className="card card-body mt-4 mb-4">
                            <h2>Add Cranes</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Тип Крана</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="craneType"
                                        onChange={this.onChange}
                                        value={craneType}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Грузоподьемность</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="loadCapacity"
                                        onChange={this.onChange}
                                        value={loadCapacity}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Register Number</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="registerNumber"
                                        onChange={this.onChange}
                                        value={registerNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Factory Number</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="factoryNumber"
                                        onChange={this.onChange}
                                        value={factoryNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Inventorization Number</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="inventorizationNumber"
                                        onChange={this.onChange}
                                        value={inventorizationNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Factory Manufacturer</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="factoryManufacturer"
                                        onChange={this.onChange}
                                        value={factoryManufacturer}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Срок освидетельствования и паспорт</label>
                                    <select className="form-control" name="examinationPeriod">
                                        {this.props.examination.map(examination => (
                                            <option value={examinationPeriod} defaultValue="">{examination.id}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Work Mode</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="workMode"
                                        onChange={this.onChange}
                                        value={workMode}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Installation Place</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="installationPlace"
                                        onChange={this.onChange}
                                        value={installationPlace}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>1 Техническое обслуживание</label>
                                    <select className="form-control" name="technicalMaintenanceFirst">
                                        {this.props.to1.map(to1 => (
                                            <option value={technicalMaintenanceFirst} defaultValue="">{to1.id}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>2 Техническое обслуживание</label>
                                    <select className="form-control" name="technicalMaintenanceSecond">
                                        {this.props.to2.map(to2 => (
                                            <option value={technicalMaintenanceSecond} defaultValue="">{to2.id}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Обследование</label>
                                    <select className="form-control" name="inspection">
                                        {this.props.inspection.map(inspection => (
                                            <option value={inspectionInsert} defaultValue="">{inspection.id}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Лицо ответственное за исправленное состояние</label>
                                    <select className="form-control" name="personResponsobleToFixedState">
                                        {this.props.personResponsibleToFixedState.map(personResponsibleToFixedState => (
                                            <option value={personResponsibleToFixedStateInsert} defaultValue="">{personResponsibleToFixedState.id}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Лицо ответственное по надзору</label>
                                    <select className="form-control" name="personResponsobleForSupervision">
                                        {this.props.personResponsibleForSupervision.map(personResponsibleForSupervision => (
                                            <option value={personResponsibleForSupervisionInsert} defaultValue="">{personResponsibleForSupervision.employeeFirstName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Metall Inspection</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="metalInspection"
                                        onChange={this.onChange}
                                        value={metalInspection}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mechanical Control</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="mechanicalControl"
                                        onChange={this.onChange}
                                        value={mechanicalControl}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Electrical Parts</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="electricalParts"
                                        onChange={this.onChange}
                                        value={electricalParts}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>owner</label>
                                    <select className="form-control" name="owner">
                                        <option value="" defaultValue="">--------</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-form" onSubmit={this.onSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
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
    to1: state.cranes.to1,
    to2: state.cranes.to2,
    inspection: state.cranes.inspection,
    personResponsibleToFixedState: state.cranes.personResponsibleToFixedState,
    personResponsibleForSupervision: state.cranes.personResponsibleForSupervision
});

export default connect(mapStateToProps, { addCranes, addExamination, getExamination, getTo1, getTo2, getInspection, getPersonResponsibleToFixedState, getPersonResponsibleSupervision })(Form);