import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacetIdentifierStrategy} from '@drsutphin/ngx-mat-facet-toolkit';
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
    RouterLink,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {

  showPageOne = true;
  showPageTwo = true;
  version = packageData.version;
  repo = typeof packageData.repository === 'string' ? packageData.repository : packageData.repository?.url;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentURL = event.url;
        if (currentURL.includes('two')) {
          this.showPageTwo = false;
          this.showPageOne = true;
        } else {
          this.showPageOne = false;
          this.showPageTwo = true;
        }
      }
    });
  }
}
