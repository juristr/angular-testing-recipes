import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[hover]'
})
export class UpdateOnHoverDirective {

    @Input() defaultColor: string

    @HostBinding("style.background-color") backgroundColor: string;

    @HostListener('mouseover') onHover() {
        this.backgroundColor = 'green';
    }

    @HostListener('mouseout') onLeave() {
        this.backgroundColor = this.defaultColor || 'blue';
    }

    ngOnInit() {
        if (this.defaultColor) {
            this.backgroundColor = this.defaultColor
        } else {
            this.backgroundColor = 'blue';
        }
    }
}