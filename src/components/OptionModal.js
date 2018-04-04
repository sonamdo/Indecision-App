import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel = "Selected Option"
        onRequestClose = {props.handleClearOption}
        closeTimeoutMS = {200}
        className = "modal"
    >
        <h3 className = "modal__title">Selected Option</h3>
        {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>}
        <button class = "button" onClick = {props.handleClearOption}>Okay</button>
    </Modal>
);

export default OptionModal;

//create a new event handler in indecision app that clears selectedOption state
//pass that into OptionModal
//call it on button click