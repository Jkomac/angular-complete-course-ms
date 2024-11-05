import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// // Bootstrap (Initializes and runs) the application with the AppComponent and appConfig
// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err)); // This approach only works when the root component is standalone

platformBrowserDynamic().bootstrapModule(AppModule); // This approach works when the root component is not standalone