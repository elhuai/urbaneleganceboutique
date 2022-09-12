import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TravelDrag from '../TravelDrag/TravelDrag';
const data = [
  {
    id: 'item-1',
    content: '台中草悟道',
  },
  {
    id: 'item-2',
    content: 'GEM再見',
  },
  {
    id: 'item-3',
    content: '說愛你',
  },
  {
    id: 'item-4',
    content: '春泥',
  },
  {
    id: 'item-5',
    content: '愛上你算我賤',
  },
  {
    id: 'item-6',
    content: '離開地球表面',
  },
  {
    id: 'item-7',
    content: '忠孝東路走九遍',
  },
  {
    id: 'item-8',
    content: '浪子回頭',
  },
  {
    id: 'item-9',
    content: '算什麼男人',
  },
];

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
          <Typography>{children}</Typography>
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
const TravelDate = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  ////////////////Date  end

  return (
    <>
      <div className="travleDrag_body">
        <div className="travleDrag_menu">
          <div className="travleDrag_header_top  mt-3 d-flex">
            <div className="travleDrag_header_top_left  ">
              <div className="travleDrag_header_back">
                <a href="/#/123" alt="/#/123"></a>
              </div>
              <h1 className="travleDrag_header_tittle ">台中阿拉瓜花嘩嘩嘩</h1>
              <h3 className="travleDrag_header_date">2022/09/11~2022/09/12</h3>
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
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab
                    label="7月29日(六)"
                    {...travelprops(1)}
                    className="travelDrage_Tab"
                  />
                  <Tab
                    label="7月30日(7)"
                    {...travelprops(2)}
                    className="travelDrage_Tab"
                  />
                  <Tab
                    label="7月31日(8)"
                    {...travelprops(3)}
                    className="travelDrage_Tab"
                  />
                  <Tab label="7月32日(9)" {...travelprops(4)} />
                  <Tab label="7月33日(10)" {...travelprops(5)} />
                  <Tab label="7月34日(11)" {...travelprops(6)} />
                  <Tab label="7月35日(12)" {...travelprops(7)} />
                </Tabs>
              </Box>
            </div>

            <TabPanel value={value} index={0}>
              <TravelDrag />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TravelDrag />
            </TabPanel>
            <TabPanel value={value} index={2}>
              QQ元件好難切 這樣感覺不太行
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
};

export default TravelDate;
