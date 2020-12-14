import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {EnseignantsComponent} from '../../pages/enseignants/enseignants.component';
import {UserComponent} from '../../pages/user/user.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoursComponent} from '../../pages/cours/cours.component';
import {ParametresComponent} from '../../pages/parametres/parametres.component';
import {ReclamationsComponent} from '../../pages/reclamations/reclamations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    CoursComponent,
    EnseignantsComponent,
    ParametresComponent,
    ReclamationsComponent
  ]
})
export class AdminLayoutModule {
}
