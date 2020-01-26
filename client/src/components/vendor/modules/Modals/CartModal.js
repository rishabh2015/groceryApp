import React, { Component } from 'react';
import ReactModal from "react-modal";
import CartModalComponent from "./CartModalComponent";

export default class CartModal extends Component
{
    constructor(props){
        super(props);
        let { modalOpen, cartObj ,itemCount  } = props;
        this.state = {
            modalIsOpen: modalOpen,
            overlayClassName:"ReactModal__Overlay",
            portalClassName:"ReactModalPortal",
            cart: cartObj,
            itemCount: itemCount

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
        let { modalIsOpen, overlayClassName, portalClassName , cart, itemCount} = this.state;  
        let { afterOpenModal, openModal, closeModal } = this;
     return(<div>

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
            
            <CartModalComponent closeModal={closeModal} cart={cart} itemCount={itemCount} />
            </ReactModal>
            </div>);
    }
}