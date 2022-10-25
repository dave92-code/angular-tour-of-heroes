import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private domSanitizer: DomSanitizer) { }
}
