import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  isAddingTask = false;
  constructor(private tasksService: TasksService){}

get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId);
}


  onCompleteTask(id: string) {

  }
  onStartAddTask(){
 this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
