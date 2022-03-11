import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared/shared.service';
import { LoadingService } from '../services/loading/loading.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    SharedService,
    LoadingService
  ],
})
export class CoreModule { }
