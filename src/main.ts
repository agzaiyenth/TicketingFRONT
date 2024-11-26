import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(DashboardComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));
