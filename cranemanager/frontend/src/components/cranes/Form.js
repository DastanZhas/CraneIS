import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCranes } from '../../actions/cranes';
import Main from '../Main'

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
        addCranes: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value });

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
        this.props.addCranes(crane);
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
                <div className="row">
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
                                    <label>Load Capacity</label>
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
                                    <label>Examination Period</label>
                                    <input
                                        className="form-control"
                                        type="datetime-local"
                                        name="examinationPeriod"
                                        onChange={this.onChange}
                                        value={examinationPeriod}
                                    />
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
                                    <label>First Technical Maintenance</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="technicalMaintenanceFirst"
                                        onChange={this.onChange}
                                        value={technicalMaintenanceFirst}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Second Technical Maintenance</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="technicalMaintenanceSecond"
                                        onChange={this.onChange}
                                        value={technicalMaintenanceSecond}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Inspection</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="inspection"
                                        onChange={this.onChange}
                                        value={inspection}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Person Responsible To Fixed State</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="personResponsibleToFixedState"
                                        onChange={this.onChange}
                                        value={personResponsibleToFixedState}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Person Responsible For Supervision</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="personResponsibleForSupervision"
                                        onChange={this.onChange}
                                        value={personResponsibleForSupervision}
                                    />
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
                                    <button type="submit" className="btn btn-primary btn-form">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Person Responsible To Fixed State</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="personResponsibleToFixedState"
                            onChange={this.onChange}
                            value={personResponsibleToFixedState}
                        />
                    </div>
                    <div className="form-group">
                        <label>Person Responsible For Supervision</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="personResponsibleForSupervision"
                            onChange={this.onChange}
                            value={personResponsibleForSupervision}
                        />
                    </div>
                    <div className="form-group">
                        <label>Metall Inspection</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="metalInspection"
                            onChange={this.onChange}
                            value={metalInspection}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mechanical Control</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="mechanicalControl"
                            onChange={this.onChange}
                            value={mechanicalControl}
                        />
                    </div>
                    <div className="form-group">
                        <label>Electrical Parts</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="electricalParts"
                            onChange={this.onChange}
                            value={electricalParts}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
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

export default connect(null, { addCranes })(Form);
