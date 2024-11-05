import { BrowserModule } from "@angular/platform-browser"; // Required module for running the application in the browser when using Angular modules. It provides services and core directives for the browser environment. 
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

// Decorator that marks a class as an Angular module and provides metadata about the module
@NgModule({
    declarations: [AppComponent], // Declare and register all (NOT standalone) components, directives... that need to work together
    bootstrap: [AppComponent], // Initializes and runs the root component
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // Imports for enabling standalone components and other modules that are needed by the root module (good tool when migrating).
})

export class AppModule {

}