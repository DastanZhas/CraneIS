import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            // Crane Type error handler
            if(error.msg.craneType) {
                alert.error(`Crane Type: ${error.msg.craneType.join()}`);
            }
            // Load Capacity
            if(error.msg.loadCapacity) {
                alert.error(`Load Capacity: ${error.msg.loadCapacity.join()}`);
            }
            // Register Number error handler
            if(error.msg.registerNumber) {
                alert.error(`Register Number: ${error.msg.registerNumber.join()}`);
            }
            // Factory number
            if(error.msg.factoryNumber) {
                alert.error(`Factory Number: ${error.msg.factoryNumber.join()}`);
            }
            // Examination period
            if(error.msg.examinationPeriod) {
                alert.error(`Examination period: ${error.msg.examinationPeriod.join()}`);
            }
            // Work Mode
            if(error.msg.workMode) {
                alert.error(`Work Mode: ${error.msg.workMode.join()}`);
            }
            // Installation Place
            if(error.msg.installationPlace) {
                alert.error(`Installation Place: ${error.msg.installationPlace.join()}`);
            }
            // First Technical Maintenance
            if(error.msg.technicalMaintenanceFirst) {
                alert.error(`First Technical Maintenance: ${error.msg.technicalMaintenanceFirst.join()}`);
            }
            // Second Technical Maintenance
            if(error.msg.technicalMaintenanceSecond) {
                alert.error(`Second Technical Maintenance: ${error.msg.technicalMaintenanceSecond.join()}`);
            }
            //Inspection
            if(error.msg.inspection) {
                alert.error(`Inspection: ${error.msg.inspection.join()}`);
            }
            // Person Responsible To Fixed State
            if(error.msg.personResponsibleToFixedState) {
                alert.error(`Person Responsible To Fixed State: ${error.msg.personResponsibleToFixedState.join()}`);
            }
            // Person Responsible For Supervision
            if(error.msg.personResponsibleForSupervision) {
                alert.error(`Person Responsible For Supervisionr: ${error.msg.personResponsibleForSupervision.join()}`);
            }
            // Metal(l) inspection in the crane/models it's: metalInspection
            if(error.msg.metalInspection) {
                alert.error(`Metall Inspection: ${error.msg.metalInspection.join()}`);
            }
            // Mechanical Control
            if(error.msg.mechanicalControl) {
                alert.error(`Mechanical Control: ${error.msg.mechanicalControl.join()}`);
            }
            // Electrical Parts
            if(error.msg.electricalParts) {
                alert.error(`Electrical Parts: ${error.msg.electricalParts.join()}`);
            }
        }

        if(message !== prevProps.message) {
            if(message.deleteCrane) {
                alert.success(message.deleteCrane);
            }
            if(message.addCrane) {
                alert.success(message.addCrane);
            }
        }
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages,
  });

export default connect(mapStateToProps)(withAlert()(Alerts));
