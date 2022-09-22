import React from 'react';
import { useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from 'ckeditor5-custom-build';
import './PostEditor.scss';

const MyCkeditor = (props) => {
  const { setGetData } = props;
  return (
    <div>
      <div className="Apps">
        <CKEditor
          config={{ placeholder: '開始輸入內容吧' }}
          editor={Editor}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.,
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setGetData(data)
            // console.log({ data });
          }}
          onBlur={(event, editor) => {
            // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
          }}
        />
      </div>
    </div>
  );
};

export default MyCkeditor;
