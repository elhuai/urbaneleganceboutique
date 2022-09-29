import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TravelDrag from '../TravelDrag/TravelDrag';
import { HiChevronLeft } from 'react-icons/hi';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

// import CoverBackground from '../../../images/post_edit_background_banner.png';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

////////////////Date  start
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const travelprops = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
const TravelDate = ({ planning, traveltitle, setGetDays, gettravelid }) => {
  ////傳給子層
  const [deviceDetial, setDeviceDetial] = useState({}); //axios post 到後端
  ///
  const moment = require('moment');
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showdate, setShowdate] = useState([]);
  // console.log('showdate', showdate);
  const handleClick = () => {
    let newDate = [...showdate];
    newDate.push(
      moment(showdate[showdate.length - 1])
        .add(1, 'days')
        .format('yyyy-MM-DD')
    );
    setShowdate(newDate);
  };

  useEffect(() => {
    const startDate = moment(
      traveltitle[0] ? traveltitle[0].start_time : ''
    ).format('yyyy-MM-DD');
    const endDate = moment(traveltitle[0] ? traveltitle[0].end_time : '');
    const differentDate = endDate.diff(startDate, 'days') + 1;
    let newDateary = [];
    for (let i = 0; i < differentDate; i++) {
      newDateary.push(moment(startDate).add(i, 'days').format('yyyy-MM-DD'));
    }
    setShowdate(newDateary);
  }, []);
  /////////傳到後端post
  const [editdetail, setEditdetail] = useState(0);
  //開關 編輯送出 完成
  const [closeeditdetail, setCloseEditdetail] = useState(0);
  //設定form表單的東西
  const [member, setMember] = useState({
    title: traveltitle[0] ? traveltitle[0].title : '',

    photo: '',
  });
  function inputhandleChange(e) {
    let newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
  }
  async function handleSubmit(e) {
    if (!editdetail) {
      setEditdetail(closeeditdetail + 1);
      setCloseEditdetail(1);
    } else {
      setEditdetail(closeeditdetail - 1);
      setCloseEditdetail(0);
    }
    e.preventDefault();

    try {
      let formData = new FormData();
      console.log('ALLllllllmember', member);
      formData.append('title', member.title);
      formData.append('photo', member.photo);
      formData.append('date', showdate.pop());
      formData.append('travelID', gettravelid);

      let response = await axios.post(
        `${API_URL}/post/datelocationId`,
        formData
      );

      console.log('照片標題新增成功', response);
    } catch (e) {
      console.log('錯誤', e);
    }

    // let response = await axios.post(
    //   `${API_URL}/post/datelocationId`,
    //   // { showdate, deviceDetial, selectedFile },
    //   {}
    // );
    // console.log(response.data);
    // setTripdetail(response.data);
  }

  //上傳圖片
  const changeHandler = (e) => {
    setMember({ ...member, photo: e.target.files[0] });
  };
  return (
    <>
      <div className="travleDrag_body">
        <div className="travleDrag_menu">
          <div className="travleDrag_header_top  mt-3 d-flex">
            <div className="travleDrag_header_top_left  ">
              <div className="travleDrag_header_back">
                <NavLink to="/travel" className="travleDrag_header_backIcon">
                  <HiChevronLeft />
                </NavLink>
              </div>
              {traveltitle.map((data) => {
                return (
                  <div key={data.user_id}>
                    {editdetail ? (
                      <input
                        className="travelDrage_input_title"
                        type="text"
                        id="title"
                        name="title"
                        value={member.title}
                        onChange={inputhandleChange}
                      />
                    ) : (
                      <h1 className="travleDrag_header_tittle ">
                        {data.title}
                      </h1>
                    )}

                    <h3 className="travleDrag_header_date">
                      {data.start_time}~{data.end_time}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="travleDrag_header_upImage">
              {/* <img src={preview ? preview : CoverBackground} alt=""></img> */}
              <label className="cover_photo_upload d-flex flex-column justify-content-center align-items-center">
                {editdetail ? (
                  <MdPhotoSizeSelectActual className="travleDrag_header_upicon"></MdPhotoSizeSelectActual>
                ) : (
                  ''
                )}

                <div className="">{editdetail ? '封面照片上傳' : ''}</div>
                <input
                  type="file"
                  className=" mt-2"
                  accept="image/*"
                  id="photo"
                  name="photo"
                  onChange={changeHandler}
                  hidden
                />
              </label>
            </div>

            <div className="travleDrag_header_edit d-flex">
              <div className="travleDrag_header_icon"></div>
              <div onClick={handleSubmit}>{editdetail ? '完成' : '編輯'} </div>
            </div>
          </div>

          <Box>
            <div className="travleDrag_day_container">
              <Box
                sx={{
                  maxWidth: { xs: 530, sm: 730 },
                  bgcolor: 'background.paper',
                }}
              >
                {traveltitle.map((data) => {
                  return (
                    <Tabs
                      key={data.user_id}
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      {showdate.map((value) => {
                        return (
                          <Tab
                            label={value}
                            {...travelprops(1)}
                            className="travelDrage_Tab  "
                          />
                        );
                      })}
                      <Tab
                        label="+"
                        {...travelprops()}
                        onClick={handleClick}
                        className="travelDrage_Tab  "
                      />
                    </Tabs>
                  );
                })}
              </Box>
            </div>

            {/* 記得這沒有key 找時間補上 */}
            {showdate.map((data, indexs) => {
              return (
                <TabPanel value={value} index={indexs}>
                  <TravelDrag
                    planning={planning}
                    indexs={indexs}
                    setDeviceDetial={setDeviceDetial}
                    editdetail={editdetail}
                    setGetDays={setGetDays}
                    gettravelid={gettravelid}
                  />
                </TabPanel>
              );
            })}
          </Box>
        </div>
      </div>
    </>
  );
};

export default TravelDate;
