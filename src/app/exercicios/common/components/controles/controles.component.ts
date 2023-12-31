import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EtapasEmProgresso } from '../../../../common/models/EtapasEmProgresso';
import { ArvoreManager } from '../../../../common/models/ArvoreManager';
import { Passos } from '../../../../common/models/Passos';
import { Console } from '../../../../common/models/Console';
import { Selecao } from '../../../../common/models/Selecao';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css'],
})
export class ControlesComponent implements OnInit {
  @Input() color: string;
  @Input() textoFormula: string;
  @Input() etapasEmProgresso: EtapasEmProgresso;
  @Input() arvoreManager: ArvoreManager;
  @Input() passos: Passos;
  @Input() console: Console;
  @Input() selecao: Selecao;

  @Output() eventAdicionar = new EventEmitter<boolean>();
  @Output() eventDerivar = new EventEmitter<null>();
  @Output() eventFechar = new EventEmitter<null>();
  @Output() eventTicar = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  adicionar(negar: boolean) {
    this.eventAdicionar.emit(negar);
  }

  derivar() {
    this.eventDerivar.emit(null);
  }
  fechar() {
    this.eventFechar.emit(null);
  }
  ticar() {
    this.eventTicar.emit(null);
  }
}
