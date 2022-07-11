import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/shared/services/wallet.service';

@Component({
  selector: 'app-connection-zone',
  templateUrl: './connection-zone.component.html',
  styleUrls: ['./connection-zone.component.css'],
})
export class ConnectionZoneComponent implements OnInit {
  constructor(private walletService: WalletService) {}

  ngOnInit(): void {}

  async onConnect() {
    console.log('click!');
    await this.walletService.connnectWallet();
  }
}
