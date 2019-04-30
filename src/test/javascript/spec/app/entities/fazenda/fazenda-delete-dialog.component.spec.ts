/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GestaoAgricolaTestModule } from '../../../test.module';
import { FazendaDeleteDialogComponent } from 'app/entities/fazenda/fazenda-delete-dialog.component';
import { FazendaService } from 'app/entities/fazenda/fazenda.service';

describe('Component Tests', () => {
    describe('Fazenda Management Delete Component', () => {
        let comp: FazendaDeleteDialogComponent;
        let fixture: ComponentFixture<FazendaDeleteDialogComponent>;
        let service: FazendaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GestaoAgricolaTestModule],
                declarations: [FazendaDeleteDialogComponent]
            })
                .overrideTemplate(FazendaDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FazendaDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FazendaService);
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
