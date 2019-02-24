import { Component, DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AnimIfDirective } from './if-animation';
import { AnimationsService } from '../services/animations.service';

@Component({
  template: `
    <div *animIf="show; info: { startAnim: 'bounceIn', endAnim: 'bounceOut', time: 1000 }">Some Content</div>
  `
})
class TestComponent {
  show = true;
}

describe('AnimIfDirective', () => {
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
      declarations: [AnimIfDirective, TestComponent],
      providers: [
        { provide: AnimationsService, useValue: animationsServiceMock }
      ]
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

  it('should display the div in the default state', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
    const content = de.nativeElement.textContent;
    expect(content).toBe('Some Content');
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

});
