import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { COURSES } from '../constants/home_courses_constants';

@Injectable()
export class HomeCourseService {

	constructor() { }
	
	getCharacters(): Observable<any[]>{
  		return Observable.of(COURSES).delay(100);
	}

	getColumns(): string[]{
  		return ["name", "imageurl", "rate", "description"]
  	};
}