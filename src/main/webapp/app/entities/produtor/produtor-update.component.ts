import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { IProdutor } from 'app/shared/model/produtor.model';
import { ProdutorService } from './produtor.service';

@Component({
    selector: 'jhi-produtor-update',
    templateUrl: './produtor-update.component.html'
})
export class ProdutorUpdateComponent implements OnInit {
    produtor: IProdutor;
    isSaving: boolean;
    dataNascimentoDp: any;

    constructor(protected produtorService: ProdutorService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ produtor }) => {
            this.produtor = produtor;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.produtor.id !== undefined) {
            this.subscribeToSaveResponse(this.produtorService.update(this.produtor));
        } else {
            this.subscribeToSaveResponse(this.produtorService.create(this.produtor));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IProdutor>>) {
        result.subscribe((res: HttpResponse<IProdutor>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
