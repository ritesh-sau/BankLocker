import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BlankPageComponent } from './modules/blank-page/blank-page.component';
import { ApproutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SideBarComponent } from './shared/layout/side-bar/side-bar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuItemService } from './shared/layout/side-bar/menu-items';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { UserComponent } from './modules/master/user/user.component';
import { BranchBookedComponent } from './modules/master/product/branch-booked/branch-booked.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RemarksDialogComponent } from './modules/master/product/remarks-dialog/remarks-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BlankPageComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    ApproutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BranchBookedComponent,
    MatDialogModule
        

  ],
  providers: [MenuItemService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
