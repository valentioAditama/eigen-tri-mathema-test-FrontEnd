import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StyleProvider } from '@ant-design/cssinjs';

// ===== Pages ===== 
// Home 
import Dashboard from './pages/Dashboard/Dashboard';

// Review
import Review from './pages/Review/review';

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: '/review', element: <Review /> }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
