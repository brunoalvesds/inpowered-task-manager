import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/task-list',
        pathMatch: 'full'
    },
    {
        path: 'task-list',
        component: TaskListPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }