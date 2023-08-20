import { Component } from '@angular/core';
import { ExpenseInterface } from 'src/app/shared/data/interface';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {

  constructor() { }

  expenseList: ExpenseInterface[] = [
    {
      category: 'Shopping',
      amount: 500,
      location: 'Helsingborg',
    },
    {
      category: 'Food',
      amount: 200,
      location: 'Malmo',
    },
    {
      category: 'Online',
      amount: 1000,
      location: 'Paris',
    },
    {
      category: 'fuel',
      amount: 300,
      location: 'Stockholm',
    },
  ];

  removeRow(index: number) {
    this.expenseList.splice(index, 1);
  }

  removeRowFromStore(index: number) {}

  addToList(cat: string, loc: string, amt: string) {
    this.expenseList.push({
      category: cat,
      location: loc,
      amount: parseInt(amt)
    })
  }
}
