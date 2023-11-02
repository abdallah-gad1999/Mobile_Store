import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgStyle]'
})
export class ImgStyleDirective {
  private isHovered = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'px solid black');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
    this.applyHoverStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
    this.removeHoverStyles();
  }

  private applyHoverStyles() {
    if (this.isHovered) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 20px rgba(0, 0, 0, 0.2)');
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '20px');   
    }
  }

  private removeHoverStyles() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    this.renderer.removeStyle(this.el.nativeElement, 'border-radius');
  }
}
