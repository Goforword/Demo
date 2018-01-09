import { NgModule } from '@angular/core'; //
import { RouterModule } from '@angular/router'; //路由注入到本模块
import { AttractionComponent } from './attraction.component'; //component注入到本模块
import { attractionRouter } from './attraction.router'; //自身路由注入到本模块

@NgModule({
    declarations:[
        AttractionComponent
    ],
    imports:[
        RouterModule.forChild(attractionRouter)
    ],
    providers:[

    ]
})
export class AttractionModule{

}