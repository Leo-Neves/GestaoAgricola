import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IProdutoAgricola } from 'app/shared/model/produto-agricola.model';
import { ProdutoAgricolaService } from './produto-agricola.service';
import { IColheita } from 'app/shared/model/colheita.model';
import { ColheitaService } from 'app/entities/colheita';
import { IProdutoVenda } from 'app/shared/model/produto-venda.model';
import { ProdutoVendaService } from 'app/entities/produto-venda';

@Component({
    selector: 'jhi-produto-agricola-update',
    templateUrl: './produto-agricola-update.component.html'
})
export class ProdutoAgricolaUpdateComponent implements OnInit {
    produtoAgricola: IProdutoAgricola;
    isSaving: boolean;

    colheitas: IColheita[];

    produtovendas: IProdutoVenda[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected produtoAgricolaService: ProdutoAgricolaService,
        protected colheitaService: ColheitaService,
        protected produtoVendaService: ProdutoVendaService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ produtoAgricola }) => {
            this.produtoAgricola = produtoAgricola;
        });
        this.colheitaService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IColheita[]>) => mayBeOk.ok),
                map((response: HttpResponse<IColheita[]>) => response.body)
            )
            .subscribe((res: IColheita[]) => (this.colheitas = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.produtoVendaService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IProdutoVenda[]>) => mayBeOk.ok),
                map((response: HttpResponse<IProdutoVenda[]>) => response.body)
            )
            .subscribe((res: IProdutoVenda[]) => (this.produtovendas = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.produtoAgricola.id !== undefined) {
            this.subscribeToSaveResponse(this.produtoAgricolaService.update(this.produtoAgricola));
        } else {
            this.subscribeToSaveResponse(this.produtoAgricolaService.create(this.produtoAgricola));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IProdutoAgricola>>) {
        result.subscribe((res: HttpResponse<IProdutoAgricola>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackColheitaById(index: number, item: IColheita) {
        return item.id;
    }

    trackProdutoVendaById(index: number, item: IProdutoVenda) {
        return item.id;
    }
}
