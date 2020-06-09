import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CreatorBadgeComponent } from './components/creator-badge/creator-badge.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { CommunityItemComponent } from './components/community-item/community-item.component';

const CORE_MODULES = [BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  CreatorBadgeComponent,
  SocialButtonComponent,
  CommunityItemComponent,
];

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatDividerModule,
  ScrollingModule,
  MatChipsModule,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [MATERIAL_MODULES, CORE_MODULES, FlexLayoutModule],
  exports: [COMPONENTS, MATERIAL_MODULES, CORE_MODULES, FlexLayoutModule],
})
export class SharedModule {}
