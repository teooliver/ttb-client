import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskProvider from './context/TaskContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';

import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as HTMLDivElement);
const queryClient = new QueryClient();

if (process.env.REACT_APP_ENV === 'enable_mockups') {
  const { worker } = require('./mocks/browser');

  worker.start();
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
