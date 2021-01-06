import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TotemComponent} from './totem/totem.component';
import {PainelComponent} from './painel/painel.component';


const routes: Routes = [
  {
    path: 'totem',
    component: TotemComponent,
  },
  {
    path: 'painel',
    component: PainelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaineisRoutingModule {
}
