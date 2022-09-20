import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TravelDrag from '../TravelDrag/TravelDrag';
import { HiChevronLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

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
const TravelDate = ({ planning, traveltitle }) => {
  const moment = require('moment');

  console.log('日期頁', planning);
  console.log('日期頁開頭和標題', traveltitle);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showdate, setShowdate] = useState([]);
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

    console.log('newDateary', newDateary);
  }, []);

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
                    <h1 className="travleDrag_header_tittle ">{data.title}</h1>
                    <h3 className="travleDrag_header_date">
                      {data.start_time}~{data.end_time}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="travleDrag_header_edit d-flex">
              <div className="travleDrag_header_icon"></div>
              <div>編輯</div>
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

            {showdate.map((data, indexs) => {
              return (
                <TabPanel value={value} index={indexs}>
                  <TravelDrag planning={planning} indexs={indexs} />
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
