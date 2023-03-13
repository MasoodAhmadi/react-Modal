// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { findDOMNode } from 'react-dom';
// import { DragSource, DropTarget } from 'react-dnd';
// import ItemTypes from './ItemType';
// const style = {
//   border: '1px dashed gray',
//   padding: '0.5rem 1rem',
//   margin: '.5rem',
//   cursor: 'move',
// };

// const cardSource = {
//   beginDrag(props) {
//     return {
//       id: props.id,
//       index: props.index,
//       columnIndex: props.columnIndex,
//     };
//   },
//   isDragging(props, monitor) {
//     return props.id === monitor.getItem().id;
//   },
// };

// const cardTarget = {
//   hover(props, monitor, component) {
//     const dragColumnIndex = monitor.getItem().columnIndex;
//     const dragIndex = monitor.getItem().index;
//     const hoverColumnIndex = props.columnIndex;
//     const hoverIndex = props.index;

//     // Don't replace items with themselves
//     if (dragIndex === hoverIndex) {
//       return;
//     }

//     // Determine rectangle on screen
//     const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

//     // Get vertical middle
//     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

//     // Determine mouse position
//     const clientOffset = monitor.getClientOffset();

//     // Get pixels to the top
//     const hoverClientY = clientOffset.y - hoverBoundingRect.top;

//     // Only perform the move when the mouse has crossed half of the items height
//     // When dragging downwards, only move when the cursor is below 50%
//     // When dragging upwards, only move when the cursor is above 50%

//     // Dragging downwards
//     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//       return;
//     }

//     // Dragging upwards
//     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//       return;
//     }

//     // Time to actually perform the action
//     props.moveCard(dragColumnIndex, dragIndex, hoverColumnIndex, hoverIndex);

//     // Note: we're mutating the monitor item here!
//     // Generally it's better to avoid mutations,
//     // but it's good here for the sake of performance
//     // to avoid expensive index searches.
//     monitor.getItem().columnIndex = hoverColumnIndex;
//     monitor.getItem().index = hoverIndex;
//   },
// };

// @DropTarget(ItemTypes.CARD, cardTarget, (connect) => ({
//   connectDropTarget: connect.dropTarget(),
// }));
// @DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging(),
// }));
// export default class Card extends Component {
//   static propTypes = {
//     connectDragSource: PropTypes.func.isRequired,
//     connectDropTarget: PropTypes.func.isRequired,
//     index: PropTypes.number.isRequired,
//     columnIndex: PropTypes.number.isRequired,
//     isDragging: PropTypes.bool.isRequired,
//     id: PropTypes.any.isRequired,
//     text: PropTypes.string.isRequired,
//     moveCard: PropTypes.func.isRequired,
//   };

//   render() {
//     const { id, text, isDragging, connectDragSource, connectDropTarget } =
//       this.props;
//     const opacity = isDragging ? 0 : 1;
//     const backgroundColor = id > 20 ? 'rgba(255,0,0,.1)' : 'rgba(0,0,255,.1)';

//     return connectDragSource(
//       connectDropTarget(
//         <div style={{ ...style, backgroundColor, opacity }}>{text}</div>
//       )
//     );
//   }
// }
