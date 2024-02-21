import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '../../../assets/images/imgError.png'

  @HostListener('error') handleError(): void{
     const elNative = this.elHost.nativeElement
     elNative.src = this.customImg
  }
 

  
  constructor(private elHost: ElementRef) {
   }

}
