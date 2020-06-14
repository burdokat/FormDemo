import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigate(['auth']);
  }
}
