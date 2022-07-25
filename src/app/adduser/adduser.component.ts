import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  isSuccessfulRegister=false;
  registerFormemp : FormGroup;
  k=true;
  var=true;
  draftvalue:any;
  constructor(private fb : FormBuilder, private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.registerFormemp = this.fb.group(
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

  register()
  {
    console.log("inside register");
    console.log(this.registerFormemp.value);
    this.registerFormemp.reset();
    alert("created account");
    
  /* this.http.post<any>('http://localhost:3000/singupUsers', this.registerForm.value).subscribe( res =>{
     alert("registration is sucessful");
      this.registerForm.reset();
      this.router.navigate(['login']);

    }, err =>{
      alert("some  error , please try again");
    }) */

  }

  cancel()
  {
    alert("cancelled");
    this.registerFormemp.reset();
  }

  changeGender(e:any)
  {
    console.log(e);
  }
  draft()
  {
  /*  this.registerFormemp.valueChanges.pipe(
      filter(()=> this.registerFormemp.valid)
    ).subscribe( val => {localStorage.setItem("draft_val", JSON.stringify(val))
    alert("inside2");
    alert(val);
  })
 this.draftvalue=localStorage.getItem("draft_val");
 alert(this.draftvalue)
 if(this.draftvalue)
 {
 
  this.registerFormemp.setValue(JSON.parse(this.draftvalue));
  alert("inside")
 }
 alert("outside")
   */
  alert("inside draft")}

}


