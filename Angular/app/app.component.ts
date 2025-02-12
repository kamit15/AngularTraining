import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    standalone: false,
    template: `<h1>Hello KPMG Angular19 demo by {{name}}</h1>
    {{games}}
    <ul>
        <li *ngFor="let game of games">{{game}}</li>
    </ul>
    {{emp.eid + "" + emp.ename}}

    {{emp.eid}} {{emp.ename}}

    {{emp | json}}

    <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Name Uppercase</th>
            <th>Name Slice 2</th>
            <th>Name Slice 2 to 4</th>
            <th>Gender Ab</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Salary Number</th>
            <th>Salary Currency</th>
            <th>Salary INR </th>
            <th>Tax</th>
            <th>Retired</th>
            <!-- <th>Date Of Joining</th> -->
            <th>DOJ date</th>
            <th>DOJ d/M/y</th>
        </tr>
        <tr *ngFor="let a of emps">
            <td>{{a.eid}}</td>
            <td>{{a.ename}}</td>
            <td>{{a.ename | uppercase}}</td>
            <td>{{a.ename | slice:2}}</td>
            <td>{{a.ename | slice:2:4}}</td>
            <td>{{a.gender}}</td>
            <td>{{a.gender | gender}}</td>
            <td>{{a.sal}}</td>
            <td>{{a.sal | number}}</td>
            <td>{{a.sal | currency}}</td>
            <td>{{a.sal | currency:"INR"}}</td>
            <td>{{a.sal | tax:0.2}}</td>
            <td>{{a.sal | tax | currency:"INR"}}</td>
            <td>{{a.retired}}</td>
            <!-- <td>{{a.doj}}</td> -->
            <td>{{a.doj | date}}</td>
            <td>{{a.doj | date:"d/M/y"}}</td>
            <td>
                <img *ngIf="a.retired" src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-931.gif" height="100" width="100"/>
                <img *ngIf="!a.retired" src="https://i.pinimg.com/originals/d9/98/d1/d998d123da2480eb9fa1baded88830e1.gif" height="100" width="100"/>
            
            </td>
        </tr>
    </table>

    <nested></nested>`
})
export class AppComponent {
    name: string = "Amit";
    games: string[] = ['hockey', 'cricket', 'Football'];

    emp = { 'eid': 101, 'ename': 'Emp' };
    
    emps=[
        {'eid':1001,'ename':'Tarun','gender':'M','sal':45000,'retired':false,'doj':new Date("2011-01-05")},
        {'eid':1002,'ename':'Priya','gender':'F','sal':77000,'retired':false,'doj':new Date("2015-02-04")},
        {'eid':1003,'ename':'Praveen','gender':'M','sal':125000,'retired':true,'doj':new Date("1985-11-11")},
        {'eid':1004,'ename':'Kavita','gender':'F','sal':85000,'retired':true,'doj':new Date("1980-05-07")},
        {'eid':1005,'ename':'Gaurav','gender':'M','sal':75000,'retired':false,'doj':new Date("2017-09-09")}
    ]
    constructor() {
        this.name = "Amit Kumar"
    }
}