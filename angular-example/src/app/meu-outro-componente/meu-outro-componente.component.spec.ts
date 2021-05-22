import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuOutroComponenteComponent } from './meu-outro-componente.component';

describe('MeuOutroComponenteComponent', () => {
  let component: MeuOutroComponenteComponent;
  let fixture: ComponentFixture<MeuOutroComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuOutroComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuOutroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
