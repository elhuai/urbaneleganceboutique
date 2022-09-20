import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useEffect, useState } from 'react';
import './Traveldrag.scss';

const TravelDrag = ({ planning, indexs }) => {
  console.log('拖移頁面', planning);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    border: 'none',
    height: 100,
    width: 640,
    padding: `10px 0 10px 10px`,
    margin: `10px 0 45px 30px`,
    background: isDragging ? 'white' : '#fffef4',
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#feefc3' : 'white',
    // height: 850,
    width: 725,
    border: 'none',
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(planning);
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
                {items.map((item, index) =>
                  indexs + 1 === item.days ? (
                    <Draggable
                      key={item.longitude}
                      draggableId={item.latitude}
                      index={index}
                    >
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
                          <div className="travelDrag_tittle">
                            {item.location_id}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ) : (
                    ''
                  )
                )}
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
