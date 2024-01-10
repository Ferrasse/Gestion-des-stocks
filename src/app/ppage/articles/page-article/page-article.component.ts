import { Component } from '@angular/core';
import {PageMenuComponent} from "../../../composants/page-menu/page-menu.component";
import {HeaderComponent} from "../../../composants/header/header.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {DetailsArticleComponent} from "../../../composants/details-article/details-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    PageMenuComponent,
    HeaderComponent,
    RouterLink,
    DetailsArticleComponent,
    PaginationComponent,
    RouterOutlet,
    BouttonActionComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.css'
})
export class PageArticleComponent {

}
