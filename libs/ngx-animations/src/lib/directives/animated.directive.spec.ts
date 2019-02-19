import { AnimatedDirective } from './animated.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsService } from '../services/animations.service';

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
  let de: DebugElement;

  beforeEach(() => {
    const animationsServiceMock = {
      create: () => {
        return {
          play: () => {}
        };
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
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
