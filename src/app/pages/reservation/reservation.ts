import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss',
})
export class Reservation implements OnInit {
  // Form fields
  kheymaName: string = '';
  kheymaPrice: number = 0;
  fullName: string = '';
  email: string = '';
  phone: string = '';
  checkIn: string = '';
  checkOut: string = '';
  guests: number = 2;
  specialRequests: string = '';

  // UI state
  isLoading: boolean = false;
  showConfirmation: boolean = false;
  totalPrice: number = 0;
  numberOfNights: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get kheyma details from route params if available
    this.route.queryParams.subscribe(params => {
      this.kheymaName = params['kheyma'] || 'Sélectionner une Kheyma';
      this.kheymaPrice = parseInt(params['price']) || 0;
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    this.checkIn = today;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.checkOut = tomorrow.toISOString().split('T')[0];

    this.calculateTotal();
  }

  calculateTotal() {
    if (this.checkIn && this.checkOut) {
      const start = new Date(this.checkIn);
      const end = new Date(this.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      this.numberOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.totalPrice = this.numberOfNights * this.kheymaPrice;
    }
  }

  onSubmit() {
    this.isLoading = true;

    // Simulate reservation processing
    setTimeout(() => {
      this.isLoading = false;
      this.showConfirmation = true;

      // Scroll to top to show confirmation
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // After 3 seconds, redirect to home
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    }, 2000);
  }

  goToKheymas() {
    this.router.navigate(['/kheymas']);
  }
}
