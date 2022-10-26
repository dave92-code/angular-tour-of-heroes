import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconsService } from './icons.service';
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

  goTo(route:string){
    this.router.navigate([route])
  }

  //angular json stilos
  // "styles": [
  //   "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  //   "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  //   "src/styles.scss"
  // ]
  //angular json estilos test
  // "styles": [
  //   "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  //   "src/styles.scss"
  // ]
}
