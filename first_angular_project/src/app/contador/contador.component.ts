import { Component } from "@angular/core";
import { Person } from '../person';

@Component({
    selector: 'contador-component',
    standalone: true,
    templateUrl: './contador.component.html' ,
    styleUrl: './contador.component.css'
})

export class ContadorComponent{
    number:number = 1;

        increase(){
            this.number++;
        }

        decrement(){
            this.number--;
        }
        reset(){
            this.number=0;
        }
}