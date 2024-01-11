import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/pages/root/root.component';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(RootComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
