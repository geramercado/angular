import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports:[CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  text_color:string = '';
  enable:boolean=false;
  msg=$localize`This is a text that i want to translate from english to spanish`;
}
