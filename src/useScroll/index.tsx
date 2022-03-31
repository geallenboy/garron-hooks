
export interface Position {
  left: number;
  top: number;
}
// export type Target = BasicTarget<HTMLElement|Document> //监听目标类型
// onScroll的控制器，返回布尔值控制是否更新position
export type ScrollListenController = (val: Position) => boolean;

const useScroll = (): any => {
  console.log('useScroll')
  return {
    scroll: 'useScroll'
  }
}

export default useScroll;