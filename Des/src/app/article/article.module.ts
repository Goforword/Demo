import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { articleRouter } from './article.rotuer';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
      RouterModule.forChild(articleRouter)
  ],
  providers: [],
})
export class ArticleModule { }
