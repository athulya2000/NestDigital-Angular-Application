import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let course:any={"name":this.name,"friendName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
    console.log(course)
    this.api.addCourse(course).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Friends added successfully")
          this.name=""
          this.friendName=""
          this.DescribeYourFriend=""
          this.friendNickName=""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
