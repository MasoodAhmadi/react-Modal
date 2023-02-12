import React, { useRef, useState } from 'react';
const defaultData = [
  {
    title: 'group 1',
    items: [
      {
        fieldType: 'dddd',
        fieldKey: 'masood',
      },
      {
        fieldType: 'dddd',
        fieldKey: 'mafruha',
      },
      {
        fieldType: 'dddd',
        fieldKey: 'toni',
      },
      {
        fieldType: 'dddd',
        fieldKey: 'jannaten',
      },
    ],
  },
  {
    title: 'group 2',
    items: [],
  },
];
function DragNDrop() {
  const [list, setList] = useState(defaultData);
  const [dragging, setDragging] = useState(false);
  //   console.log(list);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log('i am here', params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;

    if (e.target !== dragNode.current) {
      setList((prev) => {
        let newList = JSON.parse(JSON.stringify(prev));

        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };
  const handleDragEnd = () => {
    console.log('ending drag...');

    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };
  const getStyle = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return {
        backgroundColor: '#282c34',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50px',
        backgroundColor: 'white',
        borderRadius: '8px',
        // color: '#282c34',
        fontWeight: 'bold',
        margin: '5px',
      };
    }
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50px',
      backgroundColor: 'white',
      borderRadius: '8px',
      color: '#282c34',
      fontWeight: 'bold',
      margin: '5px',
    };
  };

  return (
    <div
      className='drag-n-drop'
      style={{
        padding: '.5rem',
        display: 'flex',
        flexDirection: 'row',
        gap: '1.5rem',
        // width: '100%',
        // height: ' 100%',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
        alignItems: 'start',
      }}
    >
      {list?.map((grp, grpI) => {
        return (
          <div
            key={grp.title}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className='dnd-group'
            style={{
              backgroundColor: '#49505e',
              borderRadius: '5px',
              padding: '.5rem',
            }}
          >
            <dir
              className='group-title'
              style={{
                display: 'flex',
                textAlign: 'left',
                marginBottom: '.5rem',
                fontSize: '1.5rem',
              }}
            >
              {grp.title}
            </dir>
            {grp.items?.map((item, itemI) => {
              return (
                <div
                  key={item.item}
                  draggable
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { grpI, itemI });
                        }
                      : null
                  }
                  onDragStart={(e) => {
                    handleDragStart(e, { grpI, itemI });
                  }}
                  style={
                    dragging
                      ? getStyle({ grpI, itemI })
                      : {
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          minHeight: '50px',
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          color: '#282c34',
                          fontWeight: 'bold',
                          margin: '5px',
                        }
                  }
                >
                  {item.fieldKey}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DragNDrop;
