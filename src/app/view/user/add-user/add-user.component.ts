import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';
import {StudentService} from '../../../services/student.service';

export interface TableItem {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [StudentService]
})
export class AddUserComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;

  allUsers = [{'firstName' : ''}]
  displayedColumns = ['firstName'];

  userDetailForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    mobile: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private StudentService:StudentService) { 
     this.StudentService.getAllStudent().subscribe(data  => {
      this.allUsers = data
    });
  }
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.StudentService.getAllStudent().subscribe(data => {
      this.allUsers = data
    });
  }

  onSubmit(): void {
    this.StudentService.addStudent(this.userDetailForm.value).subscribe(data  => data);
    this.StudentService.getAllStudent().subscribe((data : any) => {
      this.allUsers = data
    });
  }
}
