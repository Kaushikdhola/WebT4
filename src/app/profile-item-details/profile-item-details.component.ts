import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile-item-details',
  templateUrl: './profile-item-details.component.html',
  styleUrl: './profile-item-details.component.css'
})
export class ProfileItemDetailsComponent implements OnInit{
  userId!: string;
  userData: any;
  constructor(private authService: AuthService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.fetchProfileData();
    });
  }

  fetchProfileData() {
    this.authService.getUserById(this.userId)
      .subscribe(
        user => {
          this.userData = user;
        },
        error => {
          console.error('Error fetching profile data:', error);
        }
      );
  }
}
