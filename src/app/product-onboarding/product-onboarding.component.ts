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
  selector: 'app-product-onboarding',
  templateUrl: './product-onboarding.component.html',
  styleUrls: ['./product-onboarding.component.css']
})
export class ProductOnboardingComponent implements OnInit {
  productForm : FormGroup;
  constructor(private fb : FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      uptime : ['',[Validators.required]],
      downtime :['',[Validators.required]],
      strtdate:['',[Validators.required]],
      enddate:['',[]],
      servicetype:['',[Validators.required]],
      jrnytype:['',[Validators.required]],
      city:['',[Validators.required]]
    })
  }

  product()
  {
    console.log(this.productForm.value);
    alert("submitted product details");
  }

}
