import { RouterModule } from '@angular/router';//用路由的都必须引入
import { ArticleComponent } from './article.component'; //路由用到的

export const articleRouter = [
    {
        path:'',
        component:ArticleComponent
    }
]
