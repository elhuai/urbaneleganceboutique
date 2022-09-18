// import './_FilterPages.scss';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_URL } from '../../../../utils/config';

// const StockDetails = () => {
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);
//   // 總共有 lastPage 這麼多頁
//   const [lastPage, setLastPage] = useState(1);
//   // 目前在第幾頁
//   const [page, setPage] = useState(1);

//   // 把網址上的 :stockId 拿出來
//   // const { stockId } = useParams();

//   useEffect(() => {
//     // console.log('StockDetail - useEffect for page', page);
//     let getPagesDetail = async () => {
//       // TODO

//       let response = await axios.get(`${API_URL}/filter/products?page=${page}`);
//       // 指定館別2 景點的資料
//       setData(response.data.data);
//       // 從後端取得總頁數 (lastPage)
//       setLastPage(response.data.pagesDetail.lastPage);
//     };
//     getPagesDetail();
//   }, [page]);

//   // 製作頁碼按鈕
//   const getPages = () => {
//     let pages = [];
//     for (let i = 1; i <= lastPage; i++) {
//       pages.push(
//         <button
//           style={{
//             fontSize: '1rem',

//             backgroundColor: page === i ? '#ffc200' : '',
//             borderColor: page === i ? '#00d1b2' : '#dbdbdb',
//             color: page === i ? '#fff' : '#363636',
//             borderRadius: page === i ? '5px' : '5px',
//             width: '35px',
//             height: '35px',
//             //   borderRadius: '3px',
//             //   textAlign: '10px',
//             outline: 'none',
//           }}
//           key={i}
//           onClick={(e) => {
//             setPage(i);
//           }}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {/* 放一下頁碼 */}
//       <div className="product_filter_pages d-flex justify-content-center">
//         <div>{getPages()}</div>
//       </div>
//       <p>目前在第 {page} 頁</p>
//     </div>
//   );
// };

// // export default FilterPages;
// export default StockDetails;
