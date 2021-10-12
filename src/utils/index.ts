import { useState, useEffect } from 'react';

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

/**
 * 封装 useArray 自定义 React hook
 * @param {Array} initialArray 要处理的数组
 * @returns {Array} Object.value 处理过后的数组元素
 * @returns {Function} Object.setValue 更新数组的方法，该方法是 `useState()` 方法返回的用于更新 state 的函数
 * @returns {Function} Object.add 向数组末尾添加元素的方法
 * @returns {Function} Object.clear 该方法会将传入的数组清空
 * @returns {Function} Object.removeIndex 该方法会将指定的数组元素从数组中移除
 */
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    }
  };
};
