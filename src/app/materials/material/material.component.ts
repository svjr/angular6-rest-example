import { Component, OnInit, Input } from '@angular/core';
import { Material } from './material.model'

@Component({
  selector: 'amt-material',
  templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit {

@Input() material:Material
  constructor() { }

  ngOnInit() {
  }

}
