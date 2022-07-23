import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.EditComponent } from './user.edit.component';

describe('User.EditComponent', () => {
  let component: User.EditComponent;
  let fixture: ComponentFixture<User.EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
