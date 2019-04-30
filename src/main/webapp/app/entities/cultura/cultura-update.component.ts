import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ICultura } from 'app/shared/model/cultura.model';
import { CulturaService } from './cultura.service';

@Component({
    selector: 'jhi-cultura-update',
    templateUrl: './cultura-update.component.html'
})
export class CulturaUpdateComponent implements OnInit {
    cultura: ICultura;
    isSaving: boolean;

    constructor(protected culturaService: CulturaService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ cultura }) => {
            this.cultura = cultura;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.cultura.id !== undefined) {
            this.subscribeToSaveResponse(this.culturaService.update(this.cultura));
        } else {
            this.subscribeToSaveResponse(this.culturaService.create(this.cultura));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICultura>>) {
        result.subscribe((res: HttpResponse<ICultura>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
