import { Component } from '@angular/core';

@Component({
  selector: 'testgen-eight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-eight';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
