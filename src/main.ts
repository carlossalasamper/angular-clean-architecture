import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/presentation/app.component';
import { appConfig } from './app/core/presentation/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
