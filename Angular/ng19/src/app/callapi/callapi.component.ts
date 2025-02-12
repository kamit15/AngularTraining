import { Component } from '@angular/core';
import { RestApiService } from '../restapi.service';

@Component({
  selector: 'app-callapi',
  standalone: false,
  templateUrl: './callapi.component.html',
  styleUrl: './callapi.component.css'
  // providers: [RestApiService]
})
export class CallapiComponent {
  data: any;
  constructor(private api: RestApiService) {
    api.getData().subscribe(d => this.data = d)
  }
}
