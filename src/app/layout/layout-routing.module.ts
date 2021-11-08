import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '', pathMatch: 'full', redirectTo: 'post-page',

    },
    {
      path: 'post-page',
      loadChildren: () =>
        import('./post-page/post-page.module').then(
          (m) => m.PostPageModule
        ),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
