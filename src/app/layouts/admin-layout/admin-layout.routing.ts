import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {EnseignantsComponent} from '../../pages/enseignants/enseignants.component';
import {ReclamationsComponent} from '../../pages/reclamations/reclamations.component';
import {ParametresComponent} from '../../pages/parametres/parametres.component';
import {UserComponent} from '../../pages/user/user.component';
import {CoursComponent} from '../../pages/cours/cours.component';
import {FormulaireensignantComponent} from '../../pages/formulaire/formulaireensignant/formulaireensignant.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'enseignants', component: EnseignantsComponent},
  {path: 'reclamations', component: ReclamationsComponent},
  {path: 'parametres', component: ParametresComponent},
  {path: 'user', component: UserComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'addEnseignant', component: FormulaireensignantComponent}
];
