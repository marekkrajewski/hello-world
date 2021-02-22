import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExternalLink]',
})
export class ExternalLinkDirective implements OnInit {
  constructor(
    //
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'target',
      '_blank'
    );

    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'rel',
      'noreferrer noopener'
    );
  }
}
