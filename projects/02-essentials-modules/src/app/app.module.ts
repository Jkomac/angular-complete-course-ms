import { BrowserModule } from "@angular/platform-browser"; // Required module for running the application in the browser when using NgModules, providing services and core directives. ONLY used in the root module (AppModule).
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

// Decorator that marks a class as an Angular module and provides metadata about the module
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // Declare and register all (NOT standalone) components, directives... that need to work together
    bootstrap: [AppComponent], // Initializes and runs the root component
    imports: [BrowserModule, SharedModule, TasksModule], // Imports for enabling standalone components and other modules that are needed by the root module (good tool when migrating).
    // DatePipe belongs to the CommonModule, which is imported by BrowserModule. So, we don't need to import DatePipe explicitly.
})

export class AppModule {}