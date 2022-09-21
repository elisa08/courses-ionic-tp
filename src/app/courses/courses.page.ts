import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  cours=[];

  constructor() { }

  ngOnInit() {

    this.cours=[{
      nom:'cours 1',
      nbEtud:3

    },
    {
      nom: 'cours 2',
      nbEtud:2
    }
  ];
  }

}
