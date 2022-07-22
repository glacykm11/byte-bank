import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  ngOnInit() {}

  transferir() {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigate(['/extrato']);
        this.limparCampos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
