import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // DatePipe belongs to the CommonModule

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent], // Only need to export TasksComponent because it's the only component that will be used in the AppComponent (app.component.html)
    imports: [CommonModule, SharedModule, FormsModule]
})

export class TasksModule {}