import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  title = 'modal2';
  k='niha'
  editProfileForm: FormGroup;
  id:any;
  objIndex:any;
  userList = [
  {
   id: "1",
   firstname: "Aiman",
   lastname: "Rahmat", 
   username: "aimanrahmat",
   email: "aimanrahmat@gmail.com"
  },
  {
   id: "2",
   firstname: "Christiano",
   lastname: "Ronaldo",
   username: "ronaldo7",
   email: "ronaldo7@gmail.com"
  },
  {
   id: "3",
   firstname: "Wayne",
   lastname: "Rooney",
   username: "rooney8",
   email: "rooney8@gmail.com"
  }];
  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      fname: [''],
      lname: [''],
      username: [''],
      email: ['']
     });
  }
  openModal(targetModal:any, user:any) {
   
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.editProfileForm.patchValue({
     firstname: user.firstname,
     lastname: user.lastname,
     username: user.username,
     email: user.email
    });
   }
   onSubmit() {
   
    this.modalService.dismissAll();
    console.log("res:", this.editProfileForm.getRawValue());
    this.id= this.editProfileForm.getRawValue().id;
    this.objIndex =   this.userList.findIndex((obj => obj.id == this.id));
    this.userList[this.objIndex].firstname = this.editProfileForm.getRawValue().firstname;
    console.log(this.userList)
    
   }

}
