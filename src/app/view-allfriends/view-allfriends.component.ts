import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allfriends',
  templateUrl: './view-allfriends.component.html',
  styleUrls: ['./view-allfriends.component.css']
})
export class ViewAllfriendsComponent {
constructor(private api:ApiService){
  api.fetchFriends().subscribe(
    (response)=>{
      this.loading=false
      this.friends=response
    }
  )
}
friends:any=[]
loading:boolean=true
}
