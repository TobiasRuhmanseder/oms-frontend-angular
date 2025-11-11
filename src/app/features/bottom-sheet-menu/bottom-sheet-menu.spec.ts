import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomSheetMenu } from './bottom-sheet-menu';

describe('ButtomSheetMenu', () => {
  let component: BottomSheetMenu;
  let fixture: ComponentFixture<BottomSheetMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomSheetMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
