import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestaoAgricolaSharedModule } from 'app/shared';
import {
    TalhaoComponent,
    TalhaoDetailComponent,
    TalhaoUpdateComponent,
    TalhaoDeletePopupComponent,
    TalhaoDeleteDialogComponent,
    talhaoRoute,
    talhaoPopupRoute
} from './';

const ENTITY_STATES = [...talhaoRoute, ...talhaoPopupRoute];

@NgModule({
    imports: [GestaoAgricolaSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TalhaoComponent, TalhaoDetailComponent, TalhaoUpdateComponent, TalhaoDeleteDialogComponent, TalhaoDeletePopupComponent],
    entryComponents: [TalhaoComponent, TalhaoUpdateComponent, TalhaoDeleteDialogComponent, TalhaoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestaoAgricolaTalhaoModule {}
