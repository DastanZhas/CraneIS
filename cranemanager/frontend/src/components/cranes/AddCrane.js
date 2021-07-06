import React, { Component } from "react";
import PropTypes, { element } from "prop-types";
import examination from '../../reducers/cranes';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Dropdown, Form } from "react-bootstrap";
import { addCranes } from '../../actions/cranes';
import { getExamination } from "../../actions/examinationPeriodPassport";

import { onExaminationAddClick } from "../../components/cranes/AddExamination";
import AddExamination from "../../components/cranes/AddExamination";

class AddCrane extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  componentDidMount() {
    this.props.getExamination();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const crane = {
      content: this.state.content,
      craneType: this.state.craneType,
      loadCapacity: this.state.loadCapacity,
      registerNumber: this.state.registerNumber,
      factoryNumber: this.state.factoryNumber,
      inventorizationNumber: this.state.inventorizationNumber,
      factoryManufacturer: this.state.factoryManufacturer,
      examinationPeriod: this.state.examinationPeriod,
      workMode: this.state.workMode,
      installationPlace: this.state.installationPlace,
      technicalMaintenanceFirst: this.state.technicalMaintenanceFirst,
      technicalMaintenanceSecond: this.state.technicalMaintenanceSecond,
      inspection: this.state.inspection,
      personResponsibleToFixedState: this.state.personResponsibleToFixedState,
      personResponsibleForSupervision: this.state.personResponsibleForSupervision,
      metalInspection: this.state.metalInspection,
      mechanicalControl: this.state.mechanicalControl,
      electricalParts: this.state.electricalParts,
      owner: this.state.owner
    };
    this.props.addCranes(crane);
  };

  render() {
    return (
      <div>
        <h2>Add new crane</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Тип крана</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="craneType"
              placeholder="Enter type"
              value={this.craneType}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Грузоподьемность</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="loadCapacity"
              placeholder="Грузоподьемность"
              value={this.loadCapacity}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Регистрационный номер</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="registerNumber"
              placeholder="Регистрационный номер - уникальный"
              value={this.registerNumber}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Заводской номер</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="factoryNumber"
              placeholder="Заводской номер - уникальный"
              value={this.factoryNumber}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Инвентаризационный номер</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="inventorizationNumber"
              placeholder="Инвентаризационный номер - уникальный"
              value={this.inventorizationNumber}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Завод изготовитель</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="factoryManufacturer"
              placeholder="Завод изготовитель"
              value={this.factoryManufacturer}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId" defaultValue="Choose...">
            <Form.Control as="select" defaultValue="Choose...">
              {this.props.examination.map(examination => (
                  <option key={examination.id} value={this.examinationPeriod} >{examination.id}</option>
                ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="contentId" defaultValue="Choose...">
            <AddExamination />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Режим работы</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="workMode"
              placeholder="Режим работы"
              value={this.workMode}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Место установки</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="installationPlace"
              placeholder="Место установки"
              value={this.installationPlace}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>ТО1</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="technicalMaintenanceFirst"
              placeholder="ТО1"
              value={this.technicalMaintenanceFirst}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>ТО2</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="technicalMaintenanceSecond"
              placeholder="ТО2"
              value={this.technicalMaintenanceSecond}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Обследование</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="inspection"
              placeholder="Обследование"
              value={this.inspection}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Лицо ответственное за исправленное состояние</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="personResponsibleToFixedState"
              placeholder="Лицо ответственное за исправленное состояние"
              value={this.personResponsibleToFixedState}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Лицо ответственное по надзору</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="personResponsibleForSupervision"
              placeholder="Лицо ответственное по надзору"
              value={this.personResponsibleForSupervision}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Контроль по металу</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="metalInspection"
              placeholder="Контроль по металу"
              value={this.metalInspection}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Механический контроль</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="mechanicalControl"
              placeholder="Механический контроль"
              value={this.mechanicalControl}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>Электронная часть</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="electricalParts"
              placeholder="Электронная часть"
              value={this.electricalParts}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="contentId">
            <Form.Label>user?</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="owner"
              placeholder="user?"
              value={this.owner}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add crane
        </Button>
      </div>
    );
  }
}

AddCrane.propTypes = {
  addCranes: PropTypes.func.isRequired,
  getExamination: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  examination: state.cranes.examination,
});

export default connect(mapStateToProps, { addCranes, getExamination })(withRouter(AddCrane));