import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestaoAgricolaSharedModule } from 'app/shared';
import {
    PlantioComponent,
    PlantioDetailComponent,
    PlantioUpdateComponent,
    PlantioDeletePopupComponent,
    PlantioDeleteDialogComponent,
    plantioRoute,
    plantioPopupRoute
} from './';

const ENTITY_STATES = [...plantioRoute, ...plantioPopupRoute];

@NgModule({
    imports: [GestaoAgricolaSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PlantioComponent,
        PlantioDetailComponent,
        PlantioUpdateComponent,
        PlantioDeleteDialogComponent,
        PlantioDeletePopupComponent
    ],
    entryComponents: [PlantioComponent, PlantioUpdateComponent, PlantioDeleteDialogComponent, PlantioDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestaoAgricolaPlantioModule {}
