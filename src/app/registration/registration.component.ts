import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
employeeid=""
firstname=""
lastname=""
houseno=""
housename=""
streetname=""
pincode=""
district=""
state=""
country=""
mobileno=""
emailid=""
parentname=""
gender=""
highestdegree=""
yearOfExperience=""
dataeOfJoining=""
username=""
password=""
confirmpassword=""


readValues=()=>{
  let data:any={"employeeid":this.employeeid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"streetname":this.streetname,"housename":this.housename,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobileno":this.mobileno,"emailid":this.emailid,"parentname":this.parentname,"gender":this.gender,"highestdegree":this.highestdegree,"yearOfExperience":this.yearOfExperience,"dataeOfJoining":this.dataeOfJoining,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  if (this.password==this.confirmpassword) {
    alert("Registered successfully")
  } else {
    alert("Password and Confirmpassword doesnt match")
  }
}
}
