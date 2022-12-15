import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ArcheryComponent } from './content/archery/archery.component';
import { ContactComponent } from './content/contact/contact.component';
import { CvComponent } from './content/cv/cv.component';
import { GuitarComponent } from './content/guitar/guitar.component';
import { HomeComponent } from './content/home/home.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'archery', component: ArcheryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cv', component: CvComponent},
  {path: 'guitar', component: GuitarComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
