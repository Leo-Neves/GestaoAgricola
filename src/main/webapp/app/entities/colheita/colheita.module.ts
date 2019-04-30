import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestaoAgricolaSharedModule } from 'app/shared';
import {
    ColheitaComponent,
    ColheitaDetailComponent,
    ColheitaUpdateComponent,
    ColheitaDeletePopupComponent,
    ColheitaDeleteDialogComponent,
    colheitaRoute,
    colheitaPopupRoute
} from './';

const ENTITY_STATES = [...colheitaRoute, ...colheitaPopupRoute];

@NgModule({
    imports: [GestaoAgricolaSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ColheitaComponent,
        ColheitaDetailComponent,
        ColheitaUpdateComponent,
        ColheitaDeleteDialogComponent,
        ColheitaDeletePopupComponent
    ],
    entryComponents: [ColheitaComponent, ColheitaUpdateComponent, ColheitaDeleteDialogComponent, ColheitaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestaoAgricolaColheitaModule {}
