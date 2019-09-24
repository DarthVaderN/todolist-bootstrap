import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext';


export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    return (
        <CSSTransition in={alert.visible} timeout={{enter:2000, exit:2000}} classNames={'alert'} mountOnEnter unmountOnExit>
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Holy guacamole!</strong>
                {alert.text}
                <button onClick={hide} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>

    )
}