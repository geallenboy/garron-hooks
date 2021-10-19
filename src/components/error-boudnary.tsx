import React from 'react';

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// React.Compoent<P, S> 第一个 P 代表 props，第二个 S 代表 State
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  // React.PropsWithChildren 会自动包含 children
  state = { error: null };

  // 如果 class 组件定义了生命周期方法 static getDerivedStateFromError() 或 componentDidCatch() 中的任何一个（或两者），它就成为了 Error boundaries
  static getDerivedStateFromError(error: Error) {
    // 这个方法呢是 React 官方定义的
    return { error }; // 自动返回一个值以更新 state
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
