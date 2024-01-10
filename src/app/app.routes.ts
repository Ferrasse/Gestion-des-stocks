// Dans app.routes.ts

import {RouterModule, Routes} from '@angular/router';
import { PageLoginComponent } from './ppage/page-login/page-login.component';
import { PageInscriptionComponent } from './ppage/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './ppage/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from "./ppage/page-statistiques/page-statistiques.component";
import {PageMenuComponent} from "./composants/page-menu/page-menu.component";
import {PageArticleComponent} from "./ppage/articles/page-article/page-article.component";
import {PageNouveauArticleComponent} from "./ppage/articles/page-nouveau-article/page-nouveau-article.component";
import {NgModule} from "@angular/core";
import {PageMvtstkComponent} from "./ppage/mvtstk/page-mvtstk/page-mvtstk.component";



export const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },

  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: 'statistiques',
    component: PageStatistiquesComponent
  },
  {
    path: 'menu',
    component: PageMenuComponent
  },
  {
    path: 'articles',
    component: PageArticleComponent,
  },
  {
    path: 'nouvelarticle',
    component: PageNouveauArticleComponent,
  },
  {
    path: 'mvtstk',
    component:PageMvtstkComponent,
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'menu',
        component: PageMenuComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'nouvelarticle',
        component: PageNouveauArticleComponent,
      },
      {
        path: 'mvtstk',
        component:PageMvtstkComponent,
      },


    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

