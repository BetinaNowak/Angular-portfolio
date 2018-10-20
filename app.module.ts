import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
 // sets home page (base URL)
  { path: 'portfolio', component: PortfolioComponent },
// redirects to home
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    CvComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
	   RouterModule.forRoot(appRoutes),
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
