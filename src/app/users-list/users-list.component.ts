import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  closeResult = '';
  objIndex:any;id:any;
  registerFormemp1:FormGroup;
  userList = [
    {
     id: "1",
    fname: "Aiman",
    lname:"rish",
    Designation: "UI Developer", 
     
     email: "aimanrahmat@gmail.com"
    },
    {
     id: "2",
     fname: "Christiano",
     lname:"rish",
     Designation: "Java Developer",
     
     email: "ronaldo7@gmail.com"
    }];
  constructor(private modalService: NgbModal,private fb : FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerFormemp1 = this.fb.group(
      {
        fname : ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/),Validators.minLength(2),Validators.maxLength(20)]],
        lname : ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/),Validators.minLength(2),Validators.maxLength(20)]],
        mname : ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/),Validators.minLength(2),Validators.maxLength(20)]],
       role:['',[Validators.required, Validators.pattern(/^[a-zA-Z ]*$/),Validators.minLength(2),Validators.maxLength(20)]],
        contactNo: ['', [ Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
        password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(20)]],
        dob:['',[Validators.required]],
        address:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9\s,'-:/]*$/), Validators.maxLength(50), Validators.minLength(5)]],
        pincode:['',[Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(6)]],
     //   privacyAccptt:['',[]],
       // privacyAccpt:['',[]],
        gender:['',[Validators.required]],
        emailid : ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
        userid :['',[Validators.required, Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9]*$/)]]
      })
  }

  open(content:any,user:any) {
    
  /*  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }); */

    this.modalService.open(content, {
      centered: true,
      backdrop: 'static'
     });
    
     this.registerFormemp1.patchValue({
      fname: user.fname,
      lname: user.lname,
      role: user.Designation,
      email: user.email
     });
  }
  onSubmit() {
   
    this.modalService.dismissAll();
    console.log("res:", this.registerFormemp1.getRawValue());
    this.id= this.registerFormemp1.getRawValue().id;
    this.objIndex =   this.userList.findIndex((obj => obj.id == this.id));
    this.userList[this.objIndex].fname = this.registerFormemp1.getRawValue().firstname;
    console.log(this.userList)
    
   }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  changeGender(e:any)
  {
    console.log("f")
  }
  register()
  {
    console.log("register");
  }
  cancel(){
    console.log("k")
  }
  edit()
  {
    alert("ok")
  }

}
