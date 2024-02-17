import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  
  users:any[]=[];
  searchForm!: FormGroup;
  filteredUsers: any[] = [];
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.fetchUsers();
      this.initializeForm();
  }

  fetchUsers() {
    this.authService.getUsers()
      .subscribe(
        users => {
          this.users = users;
          this.filteredUsers = [...this.users];
        },
        error => {
          console.error('Error fetching users:', error);
        }
      );
  }

  initializeForm() {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['']
    });

    this.searchForm.get('searchQuery')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.filterUsers();
    });
  }

  filterUsers() {
    const searchTerm = this.searchForm.get('searchQuery')?.value.toLowerCase();
    if (!searchTerm) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      );
    }
  }
}
