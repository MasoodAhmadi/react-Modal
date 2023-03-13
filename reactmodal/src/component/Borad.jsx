// import React, { Component } from 'react';
// import update from 'immutability-helper';
// import Card from './style';

// export default class Board extends Component {
//   constructor(props) {
//     super(props);
//     this.moveCard = this.moveCard.bind(this);
//     this.state = {
//       columns: [
//         [
//           {
//             id: 11,
//             text: 'Write a cool JS library',
//           },
//           {
//             id: 12,
//             text: 'Make it generic enough',
//           },
//           {
//             id: 13,
//             text: 'Write README',
//           },
//           {
//             id: 14,
//             text: 'Create some examples',
//           },
//           {
//             id: 15,
//             text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//           },
//           {
//             id: 16,
//             text: '???',
//           },
//           {
//             id: 17,
//             text: 'PROFIT',
//           },
//         ],
//         [
//           {
//             id: 21,
//             text: 'Write a cool JS library',
//           },
//           {
//             id: 22,
//             text: 'Make it generic enough',
//           },
//           {
//             id: 23,
//             text: 'Write README',
//           },
//           {
//             id: 24,
//             text: 'Create some examples',
//           },
//           {
//             id: 25,
//             text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//           },
//           {
//             id: 26,
//             text: '???',
//           },
//           {
//             id: 27,
//             text: 'PROFIT',
//           },
//         ],
//       ],
//     };
//   }

//   moveCard(dragColumnIndex, dragIndex, hoverColumnIndex, hoverIndex) {
//     const { columns } = this.state;
//     const dragCard = columns[dragColumnIndex][dragIndex];

//     this.setState(
//       update(this.state, {
//         columns: {
//           $apply: (cards) =>
//             dragColumnIndex === hoverColumnIndex
//               ? update(cards, {
//                   [dragColumnIndex]: {
//                     $splice: [
//                       [dragIndex, 1],
//                       [hoverIndex, 0, dragCard],
//                     ],
//                   },
//                 })
//               : update(cards, {
//                   [dragColumnIndex]: {
//                     $splice: [[dragIndex, 1]],
//                   },
//                   [hoverColumnIndex]: {
//                     $splice: [[hoverIndex, 0, dragCard]],
//                   },
//                 }),
//         },
//       })
//     );
//   }

//   render() {
//     return (
//       <div style={{ display: 'flex' }}>
//         {this.state.columns.map((cards, columnIndex) => (
//           <div key={columnIndex}>
//             {cards.map((card, i) => (
//               <Card
//                 key={card.id}
//                 columnIndex={columnIndex}
//                 index={i}
//                 id={card.id}
//                 text={card.text}
//                 moveCard={this.moveCard}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
