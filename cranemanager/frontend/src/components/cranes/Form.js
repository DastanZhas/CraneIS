import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCranes, addExamination } from '../../actions/cranes';

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
        addExamination: PropTypes.func.isRequired
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
        const examinationInsert = {
            technicalPassportdownloadUrl, examinationPeriodDate
        }

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
            workMode, installationPlace, technicalMaintenanceFirst, technicalMaintenanceSecond, inspection, personResponsibleToFixedState,
            personResponsibleForSupervision, metalInspection, mechanicalControl, electricalParts, owner
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
                                        <option value="" defaultValue="">--------</option>
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
                                        <option value="" defaultValue="">--------</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>2 Техническое обслуживание</label>
                                    <select className="form-control" name="technicalMaintenanceSecond">
                                        <option value="" defaultValue="">--------</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Обследование</label>
                                    <select className="form-control" name="inspection">
                                        <option value="" defaultValue="">--------</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Лицо ответственное за исправленное состояние</label>
                                    <select className="form-control" name="personResponsobleToFixedState">
                                        <option value="" defaultValue="">--------</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Лицо ответственное по надзору</label>
                                    <select className="form-control" name="personResponsobleForSupervision">
                                        <option value="" defaultValue="">--------</option>
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

export default connect(null, { addCranes, addExamination })(Form);
