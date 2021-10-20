import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './environment';
import { Environment } from './environment.model';

export const ENVIRONMENT = new InjectionToken<Environment>('Environment');

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
})
export class EnvironmentModule {}
