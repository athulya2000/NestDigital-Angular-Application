import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
employeeid=""
password=""
constructor(private route:Router){}

readValues=()=>{
  let id:any={"employeeid":this.employeeid,"password":this.password}
  console.log(id)
  if (this.employeeid=="1122" && this.password=="12345") {
    this.route.navigate(['/addcourse'])
  } else {
    alert("employee id and password doesnt match")
  }
}
}
