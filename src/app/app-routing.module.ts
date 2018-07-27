import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
// declaración de las rutas en la constante app_routes


@NgModule({

    imports: [
        RouterModule.forRoot( app_routes, { useHash: true }) // esta opcion le dice a Angular si son rutas raices o hijas
      ],
    exports:  [
        RouterModule
    ] // se debe exportar para poder usarlo fuera de este .ts
})

export class AppRoutingModule { }
