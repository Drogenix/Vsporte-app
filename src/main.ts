import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/pages/root/root.component';
import {provideAnimations} from "@angular/platform-browser/animations";

bootstrapApplication(RootComponent, {
  providers: [provideAnimations()]
})
  .catch((err) => console.error(err));
