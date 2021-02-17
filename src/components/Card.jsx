import React from 'react'

const Card = ({ item, groupId, itemId }) => {
    const id = `board-${groupId}-item-${itemId}`;

    const onDragStart = evt => {
        const target = evt.target;

        evt.dataTransfer.setData("card", id);

        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const onDragOver = evt => {
        evt.stopPropagation();
        // evt.target.style.marginBottom = "60px"
    }

    const onDragOverEnd = evt => {
        // evt.stopPropagation();
        // setTimeout(() => {
        //     evt.target.style.marginBottom = "0.5rem"
        // }, 1000)
    }



    return (
        <div id={id} draggable={true} onDragLeave={onDragOverEnd} onDragOver={onDragOver} onDragStart={onDragStart} className="card">
            card {item}
        </div>
    )
}

export default Card
