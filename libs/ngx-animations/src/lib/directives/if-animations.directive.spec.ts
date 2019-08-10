import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AnimIfDirective } from './if-animation.directive';
import { AnimationsService } from '../services/animations.service';
import { animations } from '../model/animations-list';

@Component({
  template: `
    <div *animIf="show; info: { startAnim: 'bounceIn', endAnim: 'bounceOut', time: 1000 }">Some Content</div>
  `
})
class TestComponent {
  show = false;
}

describe('AnimIfDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let de: DebugElement;
  const animationsServiceMock: any = {
    animations: animations,
    create: () => {
      return {
        play: () => {}
      };
    }
  };
  const viewContainerMock: any = { clear: () => {}, createEmbeddedView: () => {} };

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AnimIfDirective, TestComponent],
      providers: [{ provide: AnimationsService, useValue: animationsServiceMock }]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  });

  it('should not display the div when show is false', fakeAsync(() => {
    component.show = false;
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
    expect(de).toBeNull();
  }));

  it('should not display the div when show in false by default', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
    expect(de).toBeNull();
  });

  it('should display the div in the default state', fakeAsync(() => {
    fixture.detectChanges();
    component.show = true;
    fixture.detectChanges();
    tick(1000);
    component.show = false;
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
    expect(de).toBeNull();
  }));

  it('should unsubscribe from subscription if exists', fakeAsync(() => {
    const animIf = new AnimIfDirective(null, viewContainerMock, animationsServiceMock);
    animIf.subscription = { unsubscribe: () => {} };
    const unsubscribeSpy = jest.spyOn(animIf.subscription, 'unsubscribe');
    animIf.animIf = false;
    expect(unsubscribeSpy).toHaveBeenCalledTimes(1);
  }));
});
