import { Action } from '@ngrx/store';
import { ExpenseInterface } from 'src/app/shared/data/interface';

export const ADD_EXEPENSE = 'Add Demo';
export const REMOVE_EXEPENSE = 'Remove Demo';

export class AddExpense implements Action {
  readonly type = ADD_EXEPENSE;

  constructor(public payload: ExpenseInterface) {}
}

export class RemoveExpense implements Action {
  readonly type = REMOVE_EXEPENSE;

  constructor(public payload: number) {}
}

export type Actions = AddExpense | RemoveExpense;
