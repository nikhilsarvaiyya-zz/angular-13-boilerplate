import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";

export interface TableItem {
  firstName: string;
  lastName: string;
}

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
  providers: [UserService],
})
export class AddUserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;

  allUsers = [{ firstName: "" }];
  displayedColumns = ["firstName"];

  userDetailForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    mobile: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private UserService: UserService) {
    this.UserService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.UserService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
    });
  }

  onSubmit(): void {
    this.UserService.createUser(this.userDetailForm.value).subscribe(
      (data) => data
    );
    this.UserService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data;
    });
  }
}
