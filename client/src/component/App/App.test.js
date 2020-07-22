import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import { Provider } from './node_modules/react-redux';
import store from './app/store';
import App from '.';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
