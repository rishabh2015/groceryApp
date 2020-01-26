import React , { Component } from 'react';
import ReactModal from "react-modal";

export default class LoginModal extends Component{

    constructor(props){
        super(props);
        let { modalOpen } = props;
        this.state = {
            modalIsOpen: modalOpen,
            overlayClassName:"ReactModal__Overlay",
            portalClassName:"ReactModalPortal",

        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        this.setState({
            overlayClassName:"ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay modal-overlay--fade-in",
        });

    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

    render(){
        return(
            <div>
                <ReactModal
                isOpen={ modalIsOpen }

                onAfterOpen={ afterOpenModal }
    
                onAfterClose={closeModal}
    
                onRequestClose={closeModal}
    
                style={{ overlay: {}, content: {} }}
    
                contentLabel={"Example Modal"}
    
                portalClassName={portalClassName}
    
                overlayClassName={overlayClassName}
    
                id={"cart_modal"}
    
                className={"ReactModal__Content"}
    
                bodyOpenClassName={
                "ReactModal__Body--open"}
    
                htmlOpenClassName={
                "ReactModal__Html--open"}
    
                ariaHideApp={
                true}
    
                shouldFocusAfterRender={
                true}
    
                shouldCloseOnOverlayClick={
                true}
    
                shouldCloseOnEsc={
                true}
    
                shouldReturnFocusAfterClose={
                true}
    
                role={
                "dialog"}
    
                parentSelector={
                () => document.body}
                >

                </ReactModal>
            </div>
        );
    }
}