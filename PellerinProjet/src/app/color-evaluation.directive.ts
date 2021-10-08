import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorEvaluation]'
})
export class ColorEvaluationDirective {

  @Input("appColorEvaluation") set number(etoiles: number) {
    if(etoiles < 1)
    {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'grey')
    }
    else if(etoiles > 2)
    {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow')
    }
    else
    {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent')
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

}
