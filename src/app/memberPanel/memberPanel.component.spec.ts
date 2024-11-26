import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberPanelComponent } from './memberPanel.component';

describe('MemberPanelComponent', () => {
  let component: MemberPanelComponent;
  let fixture: ComponentFixture<MemberPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
