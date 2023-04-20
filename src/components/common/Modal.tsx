import "./Modal.scss";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../helper";
import { openRulesModal } from "../../store/slice";
import { createPortal } from "react-dom";

interface prop {
  children: React.ReactNode;
}

const Modal: React.FC<prop> = function ({ children }) {
  const nodeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isRulesModal = useAppSelector((state) => state.main.isRulesModal);
  const dispatch = useAppDispatch();

  return createPortal(
    <CSSTransition
      in={isRulesModal}
      timeout={800}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className={`modal`} ref={nodeRef}>
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
