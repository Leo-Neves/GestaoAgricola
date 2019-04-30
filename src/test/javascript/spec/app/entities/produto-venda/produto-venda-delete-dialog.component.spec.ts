/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GestaoAgricolaTestModule } from '../../../test.module';
import { ProdutoVendaDeleteDialogComponent } from 'app/entities/produto-venda/produto-venda-delete-dialog.component';
import { ProdutoVendaService } from 'app/entities/produto-venda/produto-venda.service';

describe('Component Tests', () => {
    describe('ProdutoVenda Management Delete Component', () => {
        let comp: ProdutoVendaDeleteDialogComponent;
        let fixture: ComponentFixture<ProdutoVendaDeleteDialogComponent>;
        let service: ProdutoVendaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GestaoAgricolaTestModule],
                declarations: [ProdutoVendaDeleteDialogComponent]
            })
                .overrideTemplate(ProdutoVendaDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProdutoVendaDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProdutoVendaService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
