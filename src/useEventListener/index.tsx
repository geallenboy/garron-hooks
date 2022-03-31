import { useEffect, useRef } from "react";
import { EventType } from "@testing-library/react";

const useEventListener = (eventName: EventType, handler: EventListener, element: any | HTMLElement = window) => {
  //创建一个存储处理程序的ref
  const savedHandler = useRef<any>();
  // 如果 handler 变化了，就更新 ref.current 的值。
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler])

  useEffect(() => {
    //确保元素支持addEventListener
    if (!element?.addEventListener) return;
    //创建事件监听器，调用存储在ref中的处理程序函数
    const eventListener = (event: any) => savedHandler.current(event);
    //添加事件监听器
    element.addEventListener(eventName, eventListener);
    return () => {
      //清除时移除事件监听器
      element.removeEventListener(eventName, eventListener);
    }
  }, [eventName, element])
}

export default useEventListener;