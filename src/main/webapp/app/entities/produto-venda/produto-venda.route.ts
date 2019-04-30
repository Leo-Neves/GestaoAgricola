import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProdutoVenda } from 'app/shared/model/produto-venda.model';
import { ProdutoVendaService } from './produto-venda.service';
import { ProdutoVendaComponent } from './produto-venda.component';
import { ProdutoVendaDetailComponent } from './produto-venda-detail.component';
import { ProdutoVendaUpdateComponent } from './produto-venda-update.component';
import { ProdutoVendaDeletePopupComponent } from './produto-venda-delete-dialog.component';
import { IProdutoVenda } from 'app/shared/model/produto-venda.model';

@Injectable({ providedIn: 'root' })
export class ProdutoVendaResolve implements Resolve<IProdutoVenda> {
    constructor(private service: ProdutoVendaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProdutoVenda> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<ProdutoVenda>) => response.ok),
                map((produtoVenda: HttpResponse<ProdutoVenda>) => produtoVenda.body)
            );
        }
        return of(new ProdutoVenda());
    }
}

export const produtoVendaRoute: Routes = [
    {
        path: '',
        component: ProdutoVendaComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ProdutoVendas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ProdutoVendaDetailComponent,
        resolve: {
            produtoVenda: ProdutoVendaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ProdutoVendas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: ProdutoVendaUpdateComponent,
        resolve: {
            produtoVenda: ProdutoVendaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ProdutoVendas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: ProdutoVendaUpdateComponent,
        resolve: {
            produtoVenda: ProdutoVendaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ProdutoVendas'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const produtoVendaPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: ProdutoVendaDeletePopupComponent,
        resolve: {
            produtoVenda: ProdutoVendaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ProdutoVendas'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
