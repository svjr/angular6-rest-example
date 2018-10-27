import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {MaterialsComponent} from './materials/materials.component'

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'materiais', component: MaterialsComponent},
]