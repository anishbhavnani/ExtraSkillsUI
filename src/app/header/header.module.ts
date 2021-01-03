import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef,MatDialogModule , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogModule } from '../dialog/dialog.module';
import { LoginComponent } from '../login/login.component';
import { ParentsregisterComponent } from '../parentsregister/parentsregister.component';
@NgModule({
  imports: [CommonModule, MatTabsModule, MatDialogModule, DialogModule,
    RouterModule.forChild([
      {
        path: '', component: HeaderComponent
      },
      { path: 'dialog', component: DialogComponent }
    ])
  ],
  declarations: [HeaderComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class HeaderModule { }
