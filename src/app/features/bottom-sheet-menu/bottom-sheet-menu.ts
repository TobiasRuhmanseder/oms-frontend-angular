import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet-menu',
  imports: [MatButtonModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-sheet-menu.html',
  styleUrl: './bottom-sheet-menu.scss',
})
export class BottomSheetMenu {
  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheetMenu>>(MatBottomSheetRef);
  private router = inject(Router);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomSheetMenu(): void {
    this._bottomSheetRef.dismiss();
  }
}
