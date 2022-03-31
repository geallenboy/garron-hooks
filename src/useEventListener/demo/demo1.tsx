/**
 * title: 基础用法
 * desc: 监听鼠标位置
 */

import React, { useCallback, useState } from 'react';
import { useEventListener } from '@garron/hooks';

export default () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);
  return (
    <div>
      监听鼠标位置 ({coords.x}, {coords.y})
    </div>
  )
}

