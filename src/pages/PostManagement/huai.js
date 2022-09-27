 {/* 收藏按鈕 */}
                      <div
                        className="product_main_card_collect"
                        onClick={(e) => handleCollect(e, data.id)}
                      >
                        <FaHeart />
                      </div>
                    </div>
                    {/* 標籤 */}
                    <div className="d-flex flex-row">
                      {tag.map((data, index) => {
                        if (index > 0) {
                          return (
                            <p
                              key={index}
                              className="product_main_card_tag my-2 me-2"
                            >
                              {data}
                            </p>
                          );
                        }
                      })}


                      
                      // 收藏設定->登入與否
  const { user, setUser } = useUserInfo();
  const handleCollect = async (e, id) => {
    e.preventDefault();
    if (user.auth) {
      try {
        const result = await axios.post(
          `${API_URL}/collect/product/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        if (result.data.message === '已成功移除收藏') {
          // console.log('成功');
          e.target.style['color'] = '#747474';
          handleSuccess('已成功移除收藏');
        } else if (result.data.message === '已成功收藏') {
          // console.log('不成功');
          e.target.style['color'] = '#EF7A70';
          handleSuccess('已成功收藏');
        }
        // console.log(result.data);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      handleLoginCard({ isLogin: true }, setUser);
    }
  };
  console.log(productData);
