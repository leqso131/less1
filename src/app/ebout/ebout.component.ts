import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ebout',
  imports: [],
  templateUrl: './ebout.component.html',
  styleUrls: ['./ebout.component.css']
})
export class EboutComponent {
  public product: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.product = params;
    });
  }
}
