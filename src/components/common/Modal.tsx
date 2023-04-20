import "./Modal.scss";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../helper";
import { openRulesModal } from "../../store/slice";
import { createPortal } from "react-dom";

interface prop {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<prop> = function ({ children }) {
  const isRulesModal = useAppSelector((state) => state.main.isRulesModal);
  const dispatch = useAppDispatch();

  return createPortal(
    <CSSTransition in={isRulesModal} timeout={800} unmountOnExit>
      <div className={`modal`}>
        <div>{children}</div>
        <span
          className="close"
          onClick={() => dispatch(openRulesModal(false))}
        />
        ,
      </div>
    </CSSTransition>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
