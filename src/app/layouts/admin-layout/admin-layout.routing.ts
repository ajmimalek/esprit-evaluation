import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapComponent} from '../../pages/map/map.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UserComponent} from '../../pages/user/user.component';
import {TablesComponent} from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'enseignants', component: IconsComponent},
  {path: 'reclamations', component: MapComponent},
  {path: 'parametres', component: NotificationsComponent},
  {path: 'user', component: UserComponent},
  {path: 'cours', component: TablesComponent},
];
