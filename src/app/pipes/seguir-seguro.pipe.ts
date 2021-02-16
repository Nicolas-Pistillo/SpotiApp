import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'seguirSeguro'
})
export class SeguirSeguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value: string): any {
    const url = "https://open.spotify.com/follow/1/?uri=";

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value + '&size=basic&theme=light');
  }

}
