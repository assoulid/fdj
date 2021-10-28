import { NgModule } from '@angular/core';
import { NgrxStoreModule } from './store/ngrx-store.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OverlaySpinnerInterceptors } from './interceptors/overlay-spinner/overlay-spinner.interceptors';

@NgModule({
  imports: [NgrxStoreModule],
  exports: [NgrxStoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlaySpinnerInterceptors,
      multi: true,
    },
  ],
})
export class CoreModule {}
