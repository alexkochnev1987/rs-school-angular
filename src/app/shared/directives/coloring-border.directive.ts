import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ClassButton, Color } from 'src/app/constants';

@Directive({
  selector: '[appColoringBorder]',
})
export class ColoringBorderDirective implements OnInit {
  @Input() color!: Color;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.el.nativeElement.style.borderBottom = `10px solid`;
    this.renderer.addClass(
      this.el.nativeElement,
      `border-${ClassButton[this.color]}`
    );
  }
}