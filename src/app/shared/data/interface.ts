export interface ExpenseInterface {
  category: string;
  location: string;
  amount: number;
}

export interface Menu {
  headTitle?: string;
  path: string;
  title: string;
  icon: string;
  type: string;
  active: boolean;
  selected: boolean;
}

export interface AppState {
  readonly demoStore: ExpenseInterface[];
}
