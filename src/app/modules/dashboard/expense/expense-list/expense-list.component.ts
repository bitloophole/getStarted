import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseInterface } from 'src/app/shared/data/interface';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  @Input() tableData: ExpenseInterface[] = [];
  @Output() onRowClickEvent = new EventEmitter<number>();

  onRowClick(index: number) {
    this.onRowClickEvent.emit(index);
  }
}
