import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class OverlaySpinnerInterceptors implements HttpInterceptor {
  private inProgressCount = 0;

  constructor(private ngxSpinnerService: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.inProgressCount === 0) {
      this.ngxSpinnerService.show();
    }

    this.inProgressCount++;

    return next.handle(req).pipe(
      finalize(() => {
        this.inProgressCount--;
        if (this.inProgressCount === 0) {
          this.ngxSpinnerService.hide();
        }
      })
    );
  }
}
