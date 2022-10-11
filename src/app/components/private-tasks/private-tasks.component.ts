import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";


@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasks: any = [];

  ngOnInit(): void {
    this.tasksService.getPrivateTasks()
      .subscribe(res => {
        console.log(res);
        this.tasks = res;
      })
  }

}
