import { AnimatedDirective } from './animated.directive';
import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { AnimationsService } from '../services/animations.service';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div #theDiv="animated" [animAted]="{ time: 300, animation: 'fadeIn' }">
      Some Content
    </div>
  `
})
class TestComponent {
  show = true;
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
      create: () => {
        return player;
      }
    };
    fixture = TestBed.configureTestingModule({
      declarations: [AnimatedDirective, TestComponent],
      providers: [
        { provide: AnimationsService, useValue: animationsServiceMock }
      ]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    directive = fixture.debugElement
      .query(By.directive(AnimatedDirective))
      .injector.get(AnimatedDirective);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should animate when no options', fakeAsync(() => {
    directive.animate();
    tick(500);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));

  it('should animate when options', fakeAsync(() => {
    directive.animate({ time: 100 });
    tick(100);
    expect(playerSpy).toHaveBeenCalledTimes(1);
  }));
});
