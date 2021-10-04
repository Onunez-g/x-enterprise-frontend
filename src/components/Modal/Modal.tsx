import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";
import { ModalProps } from "./types";

const Modal = (props: ModalProps): JSX.Element => {
  const portal = document.getElementById("portal");
  if (!props.isOpen) return <></>;
  return createPortal(
    <>
      <div
        onClick={() => props.onOutsideClick && props.onClose(false)}
        className="overlay"
      ></div>
      <div className="modal">
        <div className="modalToolbar">
          <h1>{props.title}</h1>
          <button className="closeBtn" onClick={() => props.onClose(false)}>
            <AiOutlineClose />
          </button>
        </div>
        {props.children}
      </div>
    </>,
    portal!
  );
};

export default Modal;
