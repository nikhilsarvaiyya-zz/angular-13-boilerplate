import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  @Input() userList: Array<any> = [];

  constructor( private UserService:UserService) { }
  

  ngOnInit(): void {
  }

  removeUser(userId : any){
    this.UserService.deleteUser(userId).subscribe(data  => data);
    this.UserService.getAllUsers().subscribe((data ) => {
      this.userList = data
    });
  }

}
