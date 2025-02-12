import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'nested',
    standalone: false,
    template: `
    <td>{{em.eid}}</td>
        <td>{{em.ename}}</td>
        <td>{{em.ename | uppercase}}</td>
        <td>{{em.ename | slice:2}}</td>
        <td>{{em.ename | slice:2:4}}</td>
        <td>{{em.gender}}</td>
        <td>{{em.gender | gender}}</td>
        <td>{{em.sal}}</td>
        <td>{{em.sal | number}}</td>
        <td>{{em.sal | currency}}</td>
        <td>{{em.sal | currency:"INR"}}</td>
        <td>{{em.sal | tax:0.2}}</td>
        <td>{{em.sal | tax | currency:"INR"}}</td>
        <td>{{em.retired}}</td>
        <!-- <td>{{em.doj}}</td> -->
        <td>{{em.doj | date}}</td>
        <td>{{em.doj | date:"d/M/y"}}</td>
        <td>
            <img *ngIf="em.retired" src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-931.gif" height="50"
                width="50" />
            <img *ngIf="!em.retired" src="https://i.pinimg.com/originals/d9/98/d1/d998d123da2480eb9fa1baded88830e1.gif"
                height="50" width="50" />

        </td>
        <button (click)="sendToParent()">send</button>
    `
})
export class NestedComponent {
    // @Input() emp: any;
    @Input('emp') em: any;

    @Output() myevent: EventEmitter<any> = new EventEmitter();

    sendToParent() {
        this.myevent.emit(this.em.ename);
    }
}