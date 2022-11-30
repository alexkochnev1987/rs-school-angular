import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ClassButton, Color } from 'src/app/constants';

@Directive({
  selector: '[appColoringButton]',
})
export class ColoringButtonDirective implements OnInit {
  @Input() color!: Color;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.addClass(
      this.el.nativeElement,
      `btn-${ClassButton[this.color]}`
    );
  }
}
