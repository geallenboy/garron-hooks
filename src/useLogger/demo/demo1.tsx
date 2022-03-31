/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 拖拽区域可以接受文件，链接，文字，和下方的 box 节点。
 */

import React, { useRef, useState } from 'react';
import useLogger from '../index';

export default function () {

  const [, setFlag] = useState({});
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}
