import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciasService: TransferenciasService) {}

  transferir(event: any) {
    this.transferenciasService.adicionar(event)
  }
}
