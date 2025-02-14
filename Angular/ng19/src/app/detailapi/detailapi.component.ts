import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RestApiService } from '../restapi.service';
import { DataService } from '../data.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-detailapi',
  standalone: false,
  templateUrl: './detailapi.component.html',
  styleUrl: './detailapi.component.css'
})
export class DetailapiComponent implements OnInit, OnDestroy {

  ds = inject(DataService);
  counter: number = 0;
  s? :Subscription;

  show() {
    alert('Hello')
  }
  userdata: any;
  path: any = "https://appbucket22.s3.us-east-1.amazonaws.com/lotus.gif";
  constructor(private api: RestApiService) {
  }
  ngOnDestroy(): void {
    if(this.s) {
      this.s?.unsubscribe();
    }
  }
  
  ngOnInit(): void {
    this.s = this.ds.counterChange.subscribe((value) => {
      console.log(value)
      this.counter = value;
    })
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
