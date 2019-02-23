import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentList} from '../StudentList';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  Students = StudentList;
  selectedStudent : Student;
  selectList: boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(student : Student):void{
    this.selectedStudent = student;
  }
  onClick():void{
    if(this.selectList===false){
      this.selectList=true;
    }
    else{
      this.selectList= false ; 
    }
     
  }
}
