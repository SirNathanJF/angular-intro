import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of courses"

  getTitle() {
    return this.title
  }

  constructor() { }

  ngOnInit(): void {
  }

}
