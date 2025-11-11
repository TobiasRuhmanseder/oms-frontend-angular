import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { BottomSheetMenu } from '../bottom-sheet-menu/bottom-sheet-menu';

@Component({
  selector: 'app-menu-button',
  imports: [MatButtonModule],
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.scss',
})
export class MenuButton {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheetMenu(): void {
    this._bottomSheet.open(BottomSheetMenu);
  }
}
