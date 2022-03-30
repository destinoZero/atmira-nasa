import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../services/api-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imageUrl: any;
  date: string = '';
  explanation: string = '';

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.date = this.route.snapshot.params['date'];
    this.apiService.getImage(this.date).subscribe(data => {
      this.imageUrl = data.url;
      this.explanation = data.explanation;
    });
  }

  backToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
