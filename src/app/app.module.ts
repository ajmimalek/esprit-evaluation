import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
// import the feature module here so you can add it to the imports array below
import {ComponentsModule} from './components/components.module';
import {AuthentificationModule} from './layouts/authentification/authentification.module';
import {AuthentificationComponent} from './layouts/authentification/authentification.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({closeButton : true,progressBar:true,positionClass:'toast-bottom-center'}),
    AuthentificationModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthentificationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
