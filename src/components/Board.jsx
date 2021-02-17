import React, { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'

const Board = ({ children, title }) => {

    const onDrop = evt => {
        evt.preventDefault();
        const card_id = evt.dataTransfer.getData("card");
        const card = document.getElementById(card_id);
        card.style.display = "block";
        evt.target.appendChild(card);
    }

    const onDragOver = evt => {
        evt.preventDefault();
    }

    return (
        <Fragment>
            <div className="board">
                <div className="board-header">
                    <div className="board-title">
                        {title}
                    </div>
                    <div className="board-icon">
                        <FaPlus />
                    </div>
                </div>
                <div onDrop={onDrop} onDragOver={onDragOver} className="board-body">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Board
