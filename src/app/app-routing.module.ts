import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionAuthGuard } from '@core/guards/session-auth.guard';
import { sessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m=>m.AuthModule),
    canActivate: [sessionAuthGuard]
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('@modules/home/home.module').then(m=>m.HomeModule),
    canActivate: [sessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
