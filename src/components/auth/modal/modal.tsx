// CORE
import ReactDOM from 'react-dom';

// ASSETS
import classes from './modal.module.scss';

// CONTEXT
import { UserAuth } from '@/context/auth-context';

export const Modal = () => {
    const { modal, handleModal, modalContent } = UserAuth();
    if (modal) {
        return ReactDOM.createPortal(
            <>
            <div className={classes.modalContainer} onClick={() => handleModal("This is component modal content")}></div>
            {modalContent}
        </>,
        document.querySelector("#modal-root")
        );
    } else return null;

}