import { Component, OnInit } from '@angular/core';
import { RegiaoService } from '../services/regiao.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css']
})
export class RegiaoComponent {
  
  constructor(public infoService: RegiaoService) { 
    
  }
  
  escolheRegiao(regiao) {
    this.infoService.x = regiao.target.value;
    this.infoService.pegaInfos();
  }
}
