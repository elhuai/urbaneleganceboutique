// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../../utils/config';
// import { Link } from 'react-router-dom';
// import { MdOutlineClose } from 'react-icons/md';
// import './TripImport.scss';

// function TripImport() {
//   //
//   const [tripImport, setTripImport] = useState([]);
//   const [showCFBox, setShowCFBox] = useState(0);
//   const ConfirmHandle = (e) => {
//     // e.preventDefault();
//     setShowCFBox(e);
//   };

//匯入我的行程
// useEffect(() => {
//   const fetchMyTrip = async () => {
//     const result = await axios.get(`${API_URL}/community/tripDetailImport`);
//     // 取得後端來的資料
//     console.log(result.data);
//     setTripImport(result.data);
//     // 存回 useState 狀態
//   };
//   fetchMyTrip();
// }, []);

//   return (
//     <>
//       <div className="d-block d-flex flex-column align-items-center my-2 container">
//         <p className="mb-2">
//           請下拉選擇{' '}
//           <MdOutlineClose
//             className="close_icon"
//             onClick={() => {
//               ConfirmHandle(0);
//             }}
//           ></MdOutlineClose>
//         </p>
//         <select className="form-control mb-2" placeholder="請選擇我的行程">
//           {tripImport.map((data, index) => {
//             return (
//               <>
//                 <option value={data.id}>{data.title}</option>
//               </>
//             );
//           })}
//         </select>
//         <Link to="/">
//           <button className="confirm_button">確認</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default TripImport;
