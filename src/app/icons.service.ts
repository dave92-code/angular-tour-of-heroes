import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconRegistry } from '@angular/material/icon'
import { Icons } from './icons';


@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

    public registerIcons(): void {
      console.log('soy 3el service de register')
      this.loadIcons(Object.values(Icons), '../assets/svg/icons');
    }
  
    private loadIcons(iconKeys: string[], iconUrl: string): void {
      console.log('soy el service')
      console.log(iconKeys, iconUrl);
      iconKeys.forEach(key => {
        this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
      });
    }


  }

