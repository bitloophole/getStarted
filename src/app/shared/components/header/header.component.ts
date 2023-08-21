import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private navService: NavService,
    private authservice: AuthService
  ) {}
  menuItems = this.navService.MENUITEMS;

  // Toggle menu
  toggleNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        return;
      });
    }
    item.active = !item.active;
  }

  logout() {
    this.authservice.logout();
  }
}
