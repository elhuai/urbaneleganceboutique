import React, { useEffect, useState } from 'react';
import CollectionList from '../../components/adminPage/CollectionList';
import './_adminCollectionPage.scss';

// = 'http://localhost:3007/api/1.0'

const AdminCollectionPage = () => {
  return (
    <div className="d-flex flex-fill">
      <div className="flex-fill">
        <div className="admin_main_content">
          <h2>我的收藏</h2>
          <hr />
          <div className="collection_content">
            <CollectionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCollectionPage;
