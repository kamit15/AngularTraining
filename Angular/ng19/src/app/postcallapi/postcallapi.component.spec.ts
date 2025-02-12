import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcallapiComponent } from './postcallapi.component';

describe('PostcallapiComponent', () => {
  let component: PostcallapiComponent;
  let fixture: ComponentFixture<PostcallapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcallapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcallapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
