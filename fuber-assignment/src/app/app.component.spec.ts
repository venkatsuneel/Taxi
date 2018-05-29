import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FuberComponent } from './app.component';
describe('FuberComponent', () => {
  let comp: FuberComponent;
  let fixture: ComponentFixture<FuberComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FuberComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FuberComponent);
    comp = fixture.componentInstance;
  }));
  it('verify get location', async(() => {
    spyOn(comp, 'getlocation()').and.callThrough();
    expect(comp.getlocation()).toHaveBeenCalled();
  }));
  it(`verify Update location`, async(() => {
    spyOn(comp, 'updatelocation()').and.callThrough();
    expect(comp.updatelocation()).toHaveBeenCalled();
  }));

});
