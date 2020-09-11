import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 validatingForm: FormGroup;
  constructor() { }

ngOnInit() {
    $(document).ready(function() {
 		$(".signup").click(function(){
            $('.nav-tabs a:last').tab('show') 
         });

         $(".signin").click(function(){
            $('.nav-tabs a:first').tab('show') 
          });
         
   });
      this.validatingForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    }); 
}

get input() { return this.validatingForm.controls; }
}
