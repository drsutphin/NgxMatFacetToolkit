import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import packageData from '../../../ngx-mat-facet-toolkit/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {

  activePage: 'one' | 'two' | 'three' = 'one';
  isDarkMode = false;
  version = packageData.version;
  repo = typeof packageData.repository === 'string' ? packageData.repository : packageData.repository?.url;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentURL = event.urlAfterRedirects;
        if (currentURL.includes('/theme')) {
          this.activePage = 'three';
        } else if (currentURL.includes('/two')) {
          this.activePage = 'two';
        } else {
          this.activePage = 'one';
        }
      }
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
