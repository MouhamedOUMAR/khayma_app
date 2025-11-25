import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kheymas',
  imports: [],
  templateUrl: './kheymas.html',
  styleUrl: './kheymas.scss',
})
export class Kheymas {
  constructor(private router: Router) {}

  reserveKheyma(kheymaName: string, price: number) {
    this.router.navigate(['/reservation'], {
      queryParams: {
        kheyma: kheymaName,
        price: price
      }
    });
  }
}
