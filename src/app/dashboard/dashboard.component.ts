import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../services/api-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imagesArray: any;
  datesArray: any;

  constructor(private apiService: ApiServiceService) {
    this.imagesArray = [];
    this.datesArray = [
      '2022-03-29', '2022-03-28', '2022-03-27',
      '2022-03-26', '2022-03-25', '2022-03-24'
    ];
  }

  ngOnInit(): void {
    for (let i = 0, len = this.datesArray.length; i < len; i++) {
      this.apiService.getImage(this.datesArray[i]).subscribe(data => {
        this.imagesArray.push(data);
      });
    }
  }

}
