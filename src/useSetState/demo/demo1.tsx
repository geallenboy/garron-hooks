import React from 'react';
import { useSetState } from '@garron/hooks';

interface State {
  name: string;
  age: number;
}

export default () => {
  const [state, setState] = useSetState<State>({
    name: '',
    age: 10
  })

  return (
    <div>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <p>
        <button type='button' onClick={() => setState({ name: 'name1' })} >name1</button>
        <button type='button' onClick={() => setState((pre: any) => ({ age: pre.age + 1 }))} style={{ margin: '0 8px' }}>age</button>

      </p>
    </div>
  )
}