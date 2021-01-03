import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogRef,MatDialogModule , MAT_DIALOG_DATA} from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 validatingForm: FormGroup;
 animal: string;
  name: string;
  numbers = 0;
 //private dialogRef: MatDialogRef<LoginComponent>;
  /*constructor(private dialog: MatDialog,private router: Router){  
  }*/
  constructor(){
}

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

openDialog(): void {
     
  }

get input() { return this.validatingForm.controls; }
}
