import { Directive, OnChanges, ElementRef, Renderer2, SimpleChanges, Input, OnInit } from "@angular/core";

@Directive({ selector: '[appEqual]'})
export class ToEqualDirective implements OnInit {

    @Input() value: String;

    objrender:any;

    constructor(
        private elem: ElementRef,
        private renderer: Renderer2
    ){
        this.objrender = null
    }

    ngOnInit() {
        if(this.value==='Coca'){
            this.objrender = this.renderer.createText('Coca');
        }else{
            this.objrender = this.renderer.createText('No Coca');
        }
        
        this.renderer.appendChild(this.elem.nativeElement, this.objrender);
    }
}