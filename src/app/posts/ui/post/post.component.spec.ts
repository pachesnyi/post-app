import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Post } from "../../models/post.model";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let post: Post =  { id: 1, title: 'Test Post', userId: 12, body: "Lorem" };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("postClick", () => {
    beforeEach(() => {
      spyOn(component.selectedPostChange, 'emit');
    });

    it('should emit selected post if it was not already selected', () => {
      component.selected = false;
      component.postClick();

      expect(component.selectedPostChange.emit).toHaveBeenCalledWith(post);
    });

    it('should not emit selected post if it is selected', () => {
      component.selected = true;
      component.postClick();

      expect(component.selectedPostChange.emit).not.toHaveBeenCalled();
    });
  });
});
