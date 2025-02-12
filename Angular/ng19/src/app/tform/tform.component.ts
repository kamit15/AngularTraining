import { Component } from '@angular/core';

@Component({
  selector: 'app-tform',
  standalone: false,
  templateUrl: './tform.component.html',
  styleUrl: './tform.component.css'
})
export class TformComponent {
  name = 'Amit';
  submit(data:any) {
    console.log(data);
  }
}
