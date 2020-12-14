import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from '../../pages/login/login.component';
import {ComponentsModule} from '../../components/components.module';
import {NgbAlertModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AuthentificationRoutes} from './authentification.routing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthentificationRoutes),
        ComponentsModule,
        NgbCollapseModule,
        FormsModule,
        NgbAlertModule
    ]
})
export class AuthentificationModule {
}
