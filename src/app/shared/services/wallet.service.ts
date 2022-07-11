import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  address = '0x000';
  abi = ['function ownerOf(uint256) public view returns(address)'];
  constructor() {}

  async connnectWallet(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
  }
}
