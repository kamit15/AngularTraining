import { Component } from '@angular/core';
import { RestApiService } from '../restapi.service';

@Component({
  selector: 'app-detailapi',
  standalone: false,
  templateUrl: './detailapi.component.html',
  styleUrl: './detailapi.component.css'
})
export class DetailapiComponent {
  show() {
    alert('Hello')
  }
  userdata: any;
  path: any = "https://appbucket22.s3.us-east-1.amazonaws.com/lotus.gif";
  constructor(private api: RestApiService) {
  }

  submit(data: any) {
    this.api.getDataById(data.id).subscribe(d => { this.userdata = d; console.log(this.userdata) })
  }

  // scenario 2
  basepath = "https://appbucket22.s3.us-east-1.amazonaws.com/"

  // Scenairo 3
  flag: boolean = true
  flag2: boolean = false
}
