import { RouterModule } from '@angular/router';//用路由的地方都需要注入

export const appRouter = [
    {
        path:'',
        redirectTo:'artice',
        pathMatch:'full'
    },
    // {
    //     path:'article',
    //     component:ArticleComponent  //正常路由写法,需要import {ArticleComponent}模块
    // },
    {
        path:'article',//路径对应html页面上的routerLink
        loadChildren:"./article/article.module#ArticleModule"//懒加载懒路由写法
    },
    {
        path:'hotel',
        loadChildren:"./hotel/hotel.module#HotelModule"
    },
    {
        path:'attraction',
        loadChildren:"./attraction/attraction.module#AttractionModule"
    },
    {
        path:'group',
        loadChildren:"./group/group.module#GroupModule"
    },
    {
        path:'**',
        loadChildren:"./article/article.module#ArticleModule"
    }
]
