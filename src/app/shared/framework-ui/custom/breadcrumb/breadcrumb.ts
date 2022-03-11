import {NgModule,Component,Input, Output, EventEmitter,ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'p-breadcrumb',
    template: `
    <div class="row">
        <div class="col-12 col-md-10 offset-md-1">
          <nav class="page-breadcrumb ml-3">
            <ol class="bread-crumb">
              <li class="bread-crumb-item {{item.current ? 'active' : ''}}" *ngFor="let item of model"
              routerLink='{{item.url}}' >{{ item.label }}</li>
            </ol>
          </nav>
        </div>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./breadcrumb.css'],
    host: {
        'class': 'p-element'
    }
})
export class Breadcrumb {

    @Input() model: any[];

    @Input() style: any;

    @Input() styleClass: string;

    @Input() home: any;

    @Input() homeAriaLabel: string;

    @Output() onItemClick: EventEmitter<any> = new EventEmitter();

    itemClick(event, item: any) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url && !item.routerLink) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }

        this.onItemClick.emit({
            originalEvent: event,
            item: item
        });
    }

    onHomeClick(event) {
        if (this.home) {
            this.itemClick(event, this.home);
        }
    }
}

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [Breadcrumb,RouterModule],
    declarations: [Breadcrumb]
})

export class BreadcrumbModule {
}