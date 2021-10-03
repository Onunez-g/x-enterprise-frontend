import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";
interface ModalProps extends PropsWithChildren<any> {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  title: string;
  onOutsideClick?: true;
}

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
