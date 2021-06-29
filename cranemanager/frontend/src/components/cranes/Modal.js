import React, { Component, useEffect } from 'react'
import { getCranes, deleteCranes } from '../../actions/cranes';
import { connect } from 'react-redux';
import cranes from '../../reducers/cranes';

class Modal extends Component {
    state = {
        keys: []
    }

    componentDidMount() {
        this.props.getCranes();

        let keyArr = []
        let valArr = []
        let objectArray = {}

        this.props.cranes.map(i => {
            keyArr.push(Object.keys(i))
            valArr.push(Object.values(i))
        })
        
        keyArr.forEach((key, i) => objectArray[key] == valArr[i])

        this.setState({keys: objectArray})
    }

    componentDidUpdate() {
        console.log(this.props.cranes[0])
        // console.log(Object.keys(this.props.cranes[0]))
        console.log(this.state.keys)
    }

    render() {
        return (
            <div className={this.props.active === true ? "container modal modal-visible" : "container modal hidden"}>
                {
                    this.props.cranes.map(item => item.id == localStorage.getItem("craneItem") && (
                        <div key={item.id} className="card card-body modal-card">
                            <div>
                                <div className="card-item">
                                    {
                                        Object.keys(item).map(i => (
                                            i != item[item] &&
                                            <>
                                                <h1>
                                                    {i}
                                                </h1>
                                                <p>
                                                    {item[i]}
                                                </p>
                                            </>
                                        ))
                                    }
                                    {/* {
                                        Object.values(item).map(i => (
                                            <p>
                                                {i}
                                            </p>
                                        ))
                                    } */}
                                </div>
                                <div className="form-btns">
                                    <button onClick={this.props.deleteCranes.bind(this, item.id)} className="btn btn-md btn-danger">Удалить</button>
                                </div>
                            </div>
                            <button className="modal-btn" onClick={this.props.hideModal}>
                                <i className="fas fa-times"></i> 
                            </button>
                        </div>
                    ))
                }
            </div>

        )
    }
}

const mapStateToProps = state => ({
    cranes: state.cranes.cranes
});

export default connect(mapStateToProps, { getCranes, deleteCranes })(Modal);
