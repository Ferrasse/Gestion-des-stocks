import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../composants/header/header.component";

@Component({
  selector: 'app-page-nouveau-article',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './page-nouveau-article.component.html',
  styleUrl: './page-nouveau-article.component.css'
})
export class PageNouveauArticleComponent {

}
