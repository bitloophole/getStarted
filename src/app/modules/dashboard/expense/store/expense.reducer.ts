import { ExpenseInterface } from 'src/app/shared/data/interface';
import * as ExpenseActions from './expense.action';

const initialState: ExpenseInterface = {
  category: 'Books',
  amount: 50,
  location: 'Helsingborg',
};

export function reducer(
  state: ExpenseInterface[] = [initialState],
  action: ExpenseActions.Actions
) {
  switch (action.type) {
    case ExpenseActions.ADD_EXEPENSE:
      return [...state, action.payload];
    case ExpenseActions.REMOVE_EXEPENSE:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
