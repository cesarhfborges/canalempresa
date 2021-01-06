import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaineisRoutingModule } from './paineis-routing.module';
import { TotemComponent } from './totem/totem.component';
import { PainelComponent } from './painel/painel.component';


@NgModule({
  declarations: [TotemComponent, PainelComponent],
  imports: [
    CommonModule,
    PaineisRoutingModule
  ]
})
export class PaineisModule { }
