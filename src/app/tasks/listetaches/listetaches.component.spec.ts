import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetachesComponent } from './listetaches.component';

describe('ListetachesComponent', () => {
  let component: ListetachesComponent;
  let fixture: ComponentFixture<ListetachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListetachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListetachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
