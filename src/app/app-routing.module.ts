
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
    {path: '', redirectTo:'/userComponent', pathMatch: 'full'},
    {path: 'AppComponent', component: AppComponent},
    {path: 'userComponent', component: UserComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
