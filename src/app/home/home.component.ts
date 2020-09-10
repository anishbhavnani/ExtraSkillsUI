import { Component, OnInit } from '@angular/core';
import {Courses} from '../model/courses'
import {HttpClient} from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
	  this.getSkills();

	  $(document).ready(function() {
		  $(".showmore").click(function() {
		    	$(".showmore").hide();
		    	$(".myContent").show();
		    	$(".myContent").css('display', '');
		    	 $(".myContent").removeClass("hidden");
			});
		  });
  }

   getSkills() {
	  /*  this.helperService
	    .getEmployee()
	    .subscribe((data:Employee[]) => {
	      console.log(data);
	      this.employees = data; 
	    }); */
  }

}
