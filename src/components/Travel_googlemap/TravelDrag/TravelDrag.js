import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useEffect, useState } from 'react';
import './Traveldrag.scss';
const datas = [
  {
    id: 'item-1',
    content: '我會披星戴月的想你',
  },
  {
    id: 'item-2',
    content: 'how do you like it',
  },
  {
    id: 'item-3',
    content: 'on the ground',
  },
  {
    id: 'item-4',
    content: 'Forever young',
  },
  {
    id: 'item-5',
    content: 'Lisa',
  },
  {
    id: 'item-6',
    content: 'Kill this love',
  },
  {
    id: 'item-7',
    content: 'Lovesick Girls ',
  },
  {
    id: 'item-8',
    content: '星火',
  },
  {
    id: 'item-9',
    content: '盛夏光年',
  },
];

const TravelDrag = () => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    height: 100,
    width: 640,
    padding: `10px 0 10px 10px`,
    margin: `10px 0 45px 30px`,
    background: isDragging ? '#EEB569' : '#feefc3',
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightyellow' : 'white',
    // height: 850,
    width: 725,
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(datas);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    // console.log({ reorderedItems });
    setItems(reorderedItems);
  };
  return (
    <>
      <div className="travleDrag_Main">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="travelDrag_container"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {/* TODO: index要調整  */}
                    {(provided, snapshot) => (
                      <div
                        className="travelDrag_Options card  "
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="travelDrag_tittle">{item.content}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default TravelDrag;
