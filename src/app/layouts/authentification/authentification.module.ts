import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from '../../pages/login/login.component';
import {ComponentsModule} from '../../components/components.module';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AuthentificationRoutes} from './authentification.routing';


@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthentificationRoutes),
    ComponentsModule,
    NgbCollapseModule
  ]
})
export class AuthentificationModule {
}
