import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  val=false;
  errorMessage:string;
  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) { }


  ngOnInit(): void {
    this.loginForm= this.fb.group({
      contactNo: ['', [ Validators.required,Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required,]]
    })
  }
  change()
  {
    this.errorMessage='';
  }
  onsubmit(){
    this.http.get<any>('http://localhost:3000/singupUsers').subscribe(res =>{
      console.log(res);
      
      const user = res.find( (a:any) =>{
       
        return a.contactNo == this.loginForm.value.contactNo && a.password== this.loginForm.value.password

      })
      if(user)
      {
        alert("Login successfull");
        this.loginForm.reset();

        this.router.navigate(['dashboard']);
      }
      else
      {
        this.val=true;
       
          this.errorMessage = "Please check entered details"
        
        

      //  alert("user not found");
      }
    })

    }

}
