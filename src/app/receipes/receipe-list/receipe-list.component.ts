import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipe:Receipe[]=[
    new Receipe('A test receipe','This is a simple recipe','https://image.shutterstock.com/image-photo/set-tomato-sauces-on-black-600w-1390760567.jpg')
    ,new Receipe('A test receipe','This is a simple recipe','https://image.shutterstock.com/image-photo/set-tomato-sauces-on-black-600w-1390760567.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
