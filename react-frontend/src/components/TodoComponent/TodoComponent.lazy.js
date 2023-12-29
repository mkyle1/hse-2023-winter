import React, { lazy, Suspense } from 'react';

const LazyTodoComponent = lazy(() => import('./TodoComponent'));

const TodoComponent = props => (
  <Suspense fallback={null}>
    <LazyTodoComponent {...props} />
  </Suspense>
);

export default TodoComponent;
