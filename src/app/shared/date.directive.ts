import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p', 'paragraf');
  }

  @HostListener('mouseover', ['$event'])
  mouseOver() {
    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);

  }

  @HostListener('mouseleave', ['$event'])
  mouseleave() {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph)
  }

}
