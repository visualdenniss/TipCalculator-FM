import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TipCalculator from '../components/TipCalculator';

describe('TipCalculator', () => {
  test('renders default values', () => {
    render(<TipCalculator />);

    expect(screen.getByLabelText(/bill/i)).toHaveValue(null);
    expect(screen.getByLabelText(/number of people/i)).toHaveValue(1);
  });

  test('shows validation error for invalid bill', async () => {
    const user = userEvent.setup();
    render(<TipCalculator />);

    const billInput = screen.getByLabelText(/bill/i);

    await user.type(billInput, '-5');

    expect(screen.getByText(/must be positive/i)).toBeInTheDocument();
  });

  test('calculates tip correctly', async () => {
    const user = userEvent.setup();
    render(<TipCalculator />);

    const billInput = screen.getByLabelText(/bill/i);
    const peopleInput = screen.getByLabelText(/number of people/i);

    await user.clear(billInput);
    await user.type(billInput, '100');

    await user.clear(peopleInput);
    await user.type(peopleInput, '2');

    expect(await screen.findByText('$7.50')).toBeInTheDocument();
  });

  test('reset button resets values', async () => {
    const user = userEvent.setup();
    render(<TipCalculator />);

    const billInput = screen.getByLabelText(/bill/i);
    const resetBtn = screen.getByRole('button', { name: /reset/i });

    await user.type(billInput, '200');
    await user.click(resetBtn);

    expect(billInput).toHaveValue(null);
  });

  test('reset button disabled initially', () => {
    render(<TipCalculator />);

    const resetBtn = screen.getByRole('button', { name: /reset/i });

    expect(resetBtn).toBeDisabled();
  });
});
