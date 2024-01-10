import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/pages/root/root.component';

bootstrapApplication(RootComponent, {
  providers: []
})
  .catch((err) => console.error(err));
