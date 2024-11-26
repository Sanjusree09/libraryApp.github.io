import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrarianPanelComponent } from './librarianPanel.component';

describe('LibrarianPanelComponent', () => {
  let component: LibrarianPanelComponent;
  let fixture: ComponentFixture<LibrarianPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrarianPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibrarianPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
