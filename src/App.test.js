import { render, screen } from '@testing-library/react';
// import App from './App';


import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import SamuraiJsApp from './App';

test('renders SamuraiJsApp without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  
  act(() => {
    root.render(<SamuraiJsApp />);
  });
  
  act(() => {
    root.unmount();
  });
});