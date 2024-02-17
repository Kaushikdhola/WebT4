import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileItemDetailsComponent } from './profile-item-details.component';

describe('ProfileItemDetailsComponent', () => {
  let component: ProfileItemDetailsComponent;
  let fixture: ComponentFixture<ProfileItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
