import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Menu {
  headTitle?: string;
  path: string;
  title: string;
  icon: string;
  type: string;
  active: boolean;
  selected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {

  MENUITEMS: Menu[] = [
    {
      title: 'Home',
      selected: true,
      active: true,
      icon: 'home',
      type: 'link',
      path: '/dashboard/home',
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
      title: 'Reports',
      selected: false,
      icon: 'bi bi-file-earmark-text',
      type: 'link',
      active: false,
      path: '/dashboard/report',
    },
    {
      title: 'Profile',
      selected: false,
      icon: 'bi bi-people',
      type: 'link',
      path: '/dashboard/profile',
      active: false,
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
