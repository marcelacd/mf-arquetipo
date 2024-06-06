// src/components/ErrorBoundary.jsx
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <h1>El componente falló. Por favor revisarlo.</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar de nuevo</button>
    </div>
  );
};

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Aquí puedes manejar la lógica de reinicio
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
