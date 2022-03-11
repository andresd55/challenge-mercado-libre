import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [disabled]="disabled" type="{{ type }}" class="{{ _class }}">
                {{ label }}
              </button>`,
  styleUrls: ['./button.component.css'],
  host: {
    'class': 'p-element'
  }  
})
export class ButtonCustomComponent implements OnInit {

  @Input() label: string = "formsGeneral.texto_botton";
  @Input() typeButton: string = "primary";
  @Input() typeSize: boolean = true;
  @Input() type: string = "button";
  @Input() disabled!: boolean;

  _class: string = "";

  ngOnInit(): void {
    this.typeButtonFormat();
  }

  typeButtonFormat() {
    switch(this.typeButton) {
      case "primary":
        this._class = "btn-primary";
        break;
      case "secondary":
        this._class = "btn-secondary";
        break;
      default:
        this._class = "btn-primary";
        break;
    }
  }

}

@NgModule({
  declarations: [ButtonCustomComponent],
  exports: [ButtonCustomComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonCustomModule { }
