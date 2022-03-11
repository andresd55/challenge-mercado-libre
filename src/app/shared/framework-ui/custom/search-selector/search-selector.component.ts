import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, forwardRef, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-selector',
  template: ` <div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="{{ placeholder  }}"
                    aria-describedby="basic-addon2"
                    [value]="value"
                    #valueInput
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary-search" (click)="executeAction($event)" 
                      type="button"  aria-label="search">
                      <em class="{{ icon }}"></em>
                    </button>
                  </div>
                </div>
              </div>`,
  styleUrls: ['./search-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchSelectorComponent),
      multi: true
    }
  ],
  host: {
    'class': 'p-element'
  }
})
export class SearchSelectorComponent {
  
  @Input() placeholder: string = "";
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();
  @Input() icon?: string;
  @ViewChild('valueInput') valueInput: ElementRef;

  value = "";

  executeAction(data: any) {
    this.clickEvent.emit(this.valueInput.nativeElement.value);
  }

}

@NgModule({
  declarations: [SearchSelectorComponent],
  exports: [SearchSelectorComponent],
  imports: [
    CommonModule
  ]
})
export class SearchSelectorModule { }