import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { appRouter } from './app.rotuer';

@NgModule({ //装饰器函数的类,用于接受元数据对象
  declarations: [ 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter) //启动路由
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
