import { Component, OnInit } from '@angular/core';
import { Material } from './material/material.model'
import { MaterialService } from './material.service'
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'amt-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  dataSource;
  colunasTabela: string[] = ['#','id', 'sigla', 'descricao','subClasseSigla','subClasseDescricao','classeSigla','classeDescricao'];

  constructor(private materialservice: MaterialService) { }

  ngOnInit() {
    this.materialservice.materiais()
      .subscribe(n => this.dataSource = new MatTableDataSource(n))
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
