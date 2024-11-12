//Angular Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//Project  dependencies
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
// import { TaskComponent } from "./tasks/task/task.component";
// import { TasksComponent } from "./tasks/tasks.component";
// import { CardComponent } from "./shared/card/card.component";
// import { NewTaskComponent } from "./tasks/new-task/new-task.component";


@NgModule({
  declarations: [AppComponent,
                 HeaderComponent,
                 UserComponent,
                //  CardComponent, is now in Shared Module.
                //  TasksComponent, is now in tasks Module.
                //  TaskComponent, is now in tasks Module.
                //  NewTaskComponent is now in tasks Module.
                ], // Non Standalone components
  // providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule] // Standalone components
 //All the Pipes are automatically included by the BrowserModule
})
export class AppModule {}
