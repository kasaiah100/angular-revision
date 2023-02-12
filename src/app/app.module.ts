import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemComponent } from './item/item.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NotComponent } from './not/not.component';
import { ActivteGuard } from './activte.guard';
import { ActivateChildGuard } from './activate-child.guard';
import { DeactivateGuard } from './deactivate.guard';
import { LoadGuard } from './load.guard';
import { ResolveService } from './resolve.service';
import { ResolveGuard } from './resolve.guard';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { DirectiveComponent } from './directive/directive.component';
import { RainbowDirective } from './rainbow.directive';
import { ObservableComponent } from './observable/observable.component';
import { DOCUMENT } from '@angular/common';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderService } from './provider.service';
import { NewproviderService } from './newprovider.service';
import { delay } from 'rxjs/operators';
import { hiifun } from './hiifun';
import { InitializeService } from './initialize.service';

let router=[
  {path:'landing',component:LandingComponent,canActivateChild:[ActivateChildGuard],children:[
     {path:'products',component:ProductsComponent,canDeactivate:[DeactivateGuard],data:{title:'products component',husband:'kasi one',wife:'banu one'}},
     {path:'user',component:UserComponent,canDeactivate:[DeactivateGuard],data:{title:'user component',husband:'kasi two',wife:'banu two'}}]},
  {path:'profile/:name',component:ProfileComponent,data:{title:'profile component',husband:'kasi three',wife:'banu three'}},
  {path:'item/:brand',component:ItemComponent,data:{title:'item component',husband:'kasi four',wife:'banu four'}},
  {path:'navigate',component:NavigateComponent,canActivate:[ActivteGuard],resolve:{data:ResolveGuard}},
  {path:'not',component:NotComponent},
  {path:'lazy',loadChildren:()=>import('./lazy/lazy.module').then((m)=>m.LazyModule),canLoad:[LoadGuard]}
  
]






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    UserComponent,
    ProductsComponent,
    ProfileComponent,
    ItemComponent,
    NavigateComponent,
    NotComponent,
    NgcontentComponent,
    NgtemplateComponent,
    DirectiveComponent,
    RainbowDirective,
    ObservableComponent,
    ProvidersComponent,

   
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router, {
    initialNavigation: 'enabledBlocking'
})
  ],
  providers: [HomeService,ResolveService,Title,Meta,
  {provide:ProviderService,useClass:NewproviderService},
  {provide:'fake',useValue:true},
  {provide:ProviderService,useExisting:NewproviderService},
  {provide:'function',useFactory:()=>{
    let fun=false
    if(fun){
      return new ProviderService
    }
    else{
      return new NewproviderService
    }
  }},
  {provide:APP_INITIALIZER,useFactory:hiifun,deps:[InitializeService],multi:true
}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
