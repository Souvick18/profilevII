import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent {

  userFullName: string;
  @Input() expanded: boolean;
  @Output() changeSidenavState = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.userFullName = localStorage.getItem('bfs_buyerprofile_uflnm');
  }

  onStateChange() {
    this.expanded = !this.expanded;
    this.changeSidenavState.emit(this.expanded);
  }

  logout() {
    localStorage.removeItem('bfs_buyerprofile_uid');
    localStorage.removeItem('bfs_buyerprofile_uflnm');
    this.router.navigate(['/login']);
  }
}
