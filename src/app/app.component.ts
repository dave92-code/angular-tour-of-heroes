import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconsService } from './shared/services/icons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private router:Router, private iconsService:IconsService) { }

  ngOnInit(){
    this.iconsService.registerIcons();
  }
}
