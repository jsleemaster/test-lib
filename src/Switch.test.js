import React from 'react';
import Switch from './Switch';

import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';

test("reveals text when toggle is On", async () => {
  const screen = render(<Switch />);
  const toggleButton = screen.getByText('토글');
  fireEvent.click(toggleButton);

  const checkToggleText = () => {
    return screen.getByText("야호!!");
  };

  await waitFor(checkToggleText, { timeout: 2000 });
});