import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string { /* Validamos que en el array de imagenes traidos desde el JSON de la API
halla realmente imagenes validas, de lo contrario cargaremos la imagen de "imagen no encontrada" en Assets*/
    if (!images) {
      return "assets/img/noimage.png";
    } else if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return "assets/img/noimage.png";
    }

  }

}
