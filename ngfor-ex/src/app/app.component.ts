import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string ="EMployee-list" ;  
  show: boolean = true;  
    employees: Employeelist[] =[  
        {name:'ABC',position:'front-end-developer',salary:'20000',address:'mumbai'},  
        {name:'PQR',position:'back-end-developer',salary:'25000',address:'mumbai'},  
        {name:'XYZ',position:'sql-developer',salary:'20000',address:'mumbai'},  
        {name:'ABCD',position:'java-developer',salary:'20000',address:'mumbai'},  
    ] 
    //ng-switch code
    items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
    selectedValue: string= 'One';   
}
class Employeelist {  
  name : string | undefined;  
  position : string | undefined;  
  salary : string | undefined;  
  address : string | undefined;  
}  

// ng-switch code
class item {  
  name: string | undefined;  
  val: number | undefined;  
}  