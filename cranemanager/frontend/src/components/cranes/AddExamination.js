import React, { Component } from "react";
import PropTypes, { element } from "prop-types";
import examination from '../../reducers/cranes';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addExamination, getExamination } from "../../actions/examinationPeriodPassport";
import AddCrane from "./AddCrane";

class AddExamination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            technicalPassportdownloadUrl: "",
            examinationPeriodDate: ""
        };
    }

    //   componentDidMount() {
    //     this.props.getExamination();
    //   }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onExaminationAddClick = () => {
        const examination = {
            technicalPassportdownloadUrl: this.state.technicalPassportdownloadUrl,
            examinationPeriodDate: this.state.examinationPeriodDate
        }
        this.props.addExamination(examination);
    }

    render() {
        return (
            <div>
                <h2>Add new examination and crane passport</h2>
                <div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Паспорт крана</Form.Label>
                        <Form.Control 
                            type="file"  
                            name="technicalPassportdownloadUrl"
                            value={this.technicalPassportdownloadUrl}
                            onChange={this.onChange}
                            />
                    </Form.Group>

                    <Form.Group controlId="contentId">
                        <Form.Label>Дата освидетельствования</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="examinationPeriodDate"
                            placeholder="Enter type"
                            value={this.examinationPeriodDate}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </div>
                <Button variant="success" onClick={this.onExaminationAddClick}>
                    Add examination and crane passport
                </Button>
            </div>
        );
    }
}

AddExamination.propTypes = {
    addExamination: PropTypes.func.isRequired,
    getExamination: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    examination: state.cranes.examination,
});

export default connect(mapStateToProps, { addExamination, getExamination })(withRouter(AddExamination));