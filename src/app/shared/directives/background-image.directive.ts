import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { CvItemService }                    from '../services/cv-item.service';

@Directive({
  selector: '[setBackgroundImage]',
})
export class SetBGImageDirective {
    public generalData;

    constructor(
        private cvItemService: CvItemService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.generalData = this.cvItemService.getGeneralData();

        if (this.generalData.image !== undefined && this.generalData.image !== '') {
            const imageUrl = 'url(/assets/background/' + this.generalData.image + ')';
            this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundImage', imageUrl);
        }
    }
}