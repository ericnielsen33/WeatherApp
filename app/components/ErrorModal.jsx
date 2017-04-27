import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class ErrorModal extends Component {

    componentDidMount(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }

    render(){
        return(
            <div className="reveal small text-center" id="error-modal" data-reveal="">
                <h4>Error</h4>
                <p>{this.props.message}</p>
                <p></p>
                <button className="button warning expanded" data-close="">Okay</button>
            </div>
            );
    }
}

ErrorModal.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorModal;