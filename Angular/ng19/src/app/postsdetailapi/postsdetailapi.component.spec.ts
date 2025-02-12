import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdetailapiComponent } from './postsdetailapi.component';

describe('PostsdetailapiComponent', () => {
  let component: PostsdetailapiComponent;
  let fixture: ComponentFixture<PostsdetailapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsdetailapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsdetailapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
