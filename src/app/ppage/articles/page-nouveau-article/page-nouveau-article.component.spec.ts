import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauArticleComponent } from './page-nouveau-article.component';

describe('PageNouveauArticleComponent', () => {
  let component: PageNouveauArticleComponent;
  let fixture: ComponentFixture<PageNouveauArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNouveauArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNouveauArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
