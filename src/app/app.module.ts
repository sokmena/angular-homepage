import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './content/about/about.component';
import { CvComponent } from './content/cv/cv.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { GuitarComponent } from './content/guitar/guitar.component';
import { ArcheryComponent } from './content/archery/archery.component';
import { ContactComponent } from './content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CvComponent,
    PortfolioComponent,
    GuitarComponent,
    ArcheryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
