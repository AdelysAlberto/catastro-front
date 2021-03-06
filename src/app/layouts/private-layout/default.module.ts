import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../pages/private/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { ShareModule } from '../../modules/share.module';

// Persons Components
import { RegisterPersonComponent } from '../../pages/private/person/register-person/register.component';
import { ConsultPersonComponent } from '../../pages/private/person/consult-person/consult.component';

// Users componentes
import { RegisterUserComponent } from '../../pages/private/users/register-user/register-user.component';
import { ConsultUserComponent } from '../../pages/private/users/consult-user/consult-user.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    RegisterPersonComponent,
    ConsultPersonComponent,
    RegisterUserComponent,
    ConsultUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
  ]
})
export class DefaultModule { }
