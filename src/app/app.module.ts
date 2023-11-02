import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdectComponent } from './components/prodect/prodect.component';
import { SaidMinueComponent } from './components/said-minue/said-minue.component';
import { ImgStyleDirective } from './directive/img-style.directive';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DitalesComponentComponent } from './components/ditales-component/ditales-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLogComponent } from './components/user-log/user-log.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserReactiveFormComponent } from './components/user-login/reactive-form/user-reactive-form/user-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeNamePipe } from './pipe-name.pipe';
import { PipeDatePipe } from './pipe-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    ContentComponent,
    FooterComponent,
    ProdectComponent,
    SaidMinueComponent,
    ImgStyleDirective,
    ParentComponentComponent,
   
    HomePageComponent,
    DitalesComponentComponent,
    UserLogComponent,
    UserLoginComponent,
    UserReactiveFormComponent,
    PipeNamePipe,
    PipeDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
