import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../data/interface';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  MENUITEMS: Menu[] = [
    {
      title: 'Profile',
      selected: false,
      icon: 'bi bi-people',
      type: 'link',
      path: '/dashboard/profile',
      active: false,
    },
    {
      title: 'Users',
      selected: false,
      icon: 'bi bi-person',
      type: 'link',
      active: false,
      path: '/dashboard/user',
    },
    {
      title: 'Expenses',
      selected: false,
      icon: 'bi bi-cash',
      type: 'link',
      active: false,
      path: '/dashboard/expense',
    },
    {
      title: 'Sign Out',
      selected: false,
      icon: 'bi bi-file-earmark-text',
      type: 'link',
      active: false,
      path: '/login',
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
