import React from "react";
import './style.scss';

class Button extends React.Component {
    render() {
        return (
            <button className="button">
                <span>
                    Realizar Agendamento
                </span>
            </button>
        )
    }
}

export default Button;