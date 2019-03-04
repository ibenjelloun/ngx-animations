import { AnimatedDirective } from './animated.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AnimationsService } from '../services/animations.service';
import { By } from '@angular/platform-browser';
import { animations } from '../model/animations-list';

@Component({
  template: `
    <div #theDiv="animated" [animAted]="options">Some Content</div>
  `
})
class TestComponent {
  show = true;
  options = { time: 300, animation: 'fadeIn' };
}

describe('AnimatedDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: AnimatedDirective;
  let player;
  let playerSpy;

  beforeEach(() => {
    player = {
      play: () => {},
      onDone: f => {
        f();
      },
      reset: () => {}
    };
    playerSpy = jest.spyOn(player, 'play');
    const animationsServiceMock = {
      animations: animations,
      create: () => {
        return player;
      }
    };
    fixture = TestBed.configureTestingModule({
      declarations: [AnimatedDirective, TestComponent],
      providers: [{ provide: AnimationsService, useValue: animationsServiceMock }]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    directive = fixture.debugElement.query(By.directive(AnimatedDirective)).injector.get(AnimatedDirective);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should animate when options are null', fakeAsync(() => {
    component.options = null;
    fixture.detectChanges();
    directive.animate();
    tick(500);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));

  it('should animate when options are empty object', fakeAsync(() => {
    component.options = <any>{};
    fixture.detectChanges();
    directive.animate();
    tick(500);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));

  it('should animate when options only in initialisation', fakeAsync(() => {
    directive.animate();
    tick(500);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));

  it('should animate when options in initialisation and call', fakeAsync(() => {
    directive.animate({ time: 100 });
    tick(100);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));

  it('should animate when options in initialisation and call with empty object', fakeAsync(() => {
    directive.animate({});
    tick(500);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));
});
