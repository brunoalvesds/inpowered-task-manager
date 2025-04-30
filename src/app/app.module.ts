import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from './shared/components/task-card/task-card.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { UserHeaderComponent } from './shared/components/user-header/user-header.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListPageComponent,
    TaskCardComponent,
    SideMenuComponent,
    UserHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
