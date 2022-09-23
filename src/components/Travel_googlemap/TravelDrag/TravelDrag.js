import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useEffect, useState } from 'react';
import mapicon from '../../../images/Travel_input_location.svg';
import './Traveldrag.scss';
import { HiOutlineTrash } from 'react-icons/hi';

const TravelDrag = ({
  planning,
  indexs,
  setDeviceDetial,
  editdetail,
  setDeviceindex,
}) => {
  //子傳父
  useEffect(() => {
    setDeviceDetial(items);
  });
  //
  //編輯視窗完成視窗
  // console.log('editdetail', editdetail);

  //
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

  // console.log('移動頁面的items', items);

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
      {editdetail === 0 ? (
        <div className="traveldrage_change">
          {items.map((item, index) => {
            return indexs + 1 === item.days ? (
              <div className="travelDrag_container" key={item.daysort}>
                <div className="travel_drag_main_card travelDrag_container row card border-primary ">
                  <div className="row g-1" style={{ height: '120px' }}>
                    <div className="col-md-3 me-3">
                      {items.length === 0 ? (
                        <img
                          src="https://picsum.photos/300/300?random31"
                          alt="#/"
                          className="Travel_Drag_card_img"
                        />
                      ) : (
                        <img
                          // src={
                          //   process.env.REACT_APP_BASE_API_URL +
                          //   '/' +
                          //   item.photo_path +
                          //   '/' +
                          //   item.main_photo
                          // }
                          src="https://picsum.photos/1300/1300?random31"
                          className="Travel_Drag_card_img"
                          alt="..."
                        />
                      )}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className=" ">
                          <h5 className="Travel_Drag_card-title">
                            {/* {item.name} */}
                          </h5>
                        </div>
                        <div className="Travel_Drag_cardText d-flex">
                          <img
                            src={mapicon}
                            className="travel_Dragmapicon"
                            alt="#123"
                          />
                          <p className="Travel_DragNavbar_text">
                            {item.locate_name}
                          </p>
                        </div>
                        <div className="d-flex bd-highlight ">
                          <div className="Travel_Drag_trashIconn ms-auto  ">
                            <HiOutlineTrash />
                          </div>

                          <p className="ms-auto  bd-highlight Travel_Drag_cardNT ">
                            刪除
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            );
          })}
        </div>
      ) : (
        <div className="travleDrag_Main ">
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
                        key={item.daysort}
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
                              {item.locate_name}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ) : (
                      ''
                    )
                  )}
                  {provided.placeholder}
                  {/* <button
                  onClick={() => {
                    setDeviceDetial(items);
                  }}
                >
                  123
                </button> */}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </>
  );
};

export default TravelDrag;
