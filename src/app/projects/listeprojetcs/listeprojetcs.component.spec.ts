import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprojetcsComponent } from './listeprojetcs.component';

describe('ListeprojetcsComponent', () => {
  let component: ListeprojetcsComponent;
  let fixture: ComponentFixture<ListeprojetcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeprojetcsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeprojetcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
