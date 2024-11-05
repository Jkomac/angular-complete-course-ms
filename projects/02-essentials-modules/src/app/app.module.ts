import { BrowserModule } from "@angular/platform-browser"; // Required module for running the application in the browser when using Angular modules. It provides services and core directives for the browser environment. 
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { CardComponent } from "./shared/card/card.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

// Decorator that marks a class as an Angular module and provides metadata about the module
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent], // Declare and register all (NOT standalone) components, directives... that need to work together
    bootstrap: [AppComponent], // Initializes and runs the root component
    imports: [BrowserModule, FormsModule], // Imports for enabling standalone components and other modules that are needed by the root module (good tool when migrating).
    // DatePipe belongs to the CommonModule, which is imported by BrowserModule. So, we don't need to import DatePipe explicitly.
})

export class AppModule {}