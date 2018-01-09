import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { groupRouter } from './group.router';

@NgModule({
    declarations:[
        GroupComponent
    ],
    imports:[
        RouterModule.forChild(groupRouter)
    ],
    providers:[

    ]
})
export class GroupModule{

}