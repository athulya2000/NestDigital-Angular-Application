import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allcourses',
  templateUrl: './view-allcourses.component.html',
  styleUrls: ['./view-allcourses.component.css']
})
export class ViewAllcoursesComponent {
  constructor(private api:ApiService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]
}
