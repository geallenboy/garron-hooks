/**
 * title: 基础用法
 * desc: 显示隐藏
 */

import React, { useEffect, useState } from 'react';
import { useToggle } from '@garron/hooks';

export default () => {
  const [isToggle, setIsToggle] = useToggle();
  return (
    <div>
      <button onClick={setIsToggle}>{isToggle ? 'toggle' : 'click to toggle'}</button>
    </div>
  )
}

