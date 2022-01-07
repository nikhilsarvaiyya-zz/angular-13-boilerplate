import { Component, OnInit } from '@angular/core';
import {CatService} from '../../../../services/cat.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CatService]
})
export class CardsComponent implements OnInit {
  dataToDisplay = []

  constructor(private service:CatService) {

    this.service.getAllCats().subscribe((data : any) => {
      console.log({data})
      this.dataToDisplay = data.cats;
    });
   }

  ngOnInit(): void {
  }


  
}
