import { AnimationsService } from './animations.service';
import { animations } from '../model/animations-list';

describe('AnimationsService (with spies)', () => {
  let animationBuilderSpy: { build: jasmine.Spy };
  let animationFactorySpy: { create: jasmine.Spy };
  let animationsService: AnimationsService;

  beforeEach(() => {
    animationBuilderSpy = jasmine.createSpyObj('AnimationBuilder', ['build']);
    animationFactorySpy = jasmine.createSpyObj('AnimationFactory', ['create']);
    animationBuilderSpy.build.and.returnValue(animationFactorySpy);
    animationsService = new AnimationsService(<any>animationBuilderSpy);
  });

  it('should return animation player', () => {
    animationsService.create(animations.bounce(300), null);
    expect(animationBuilderSpy.build.calls.count()).toBe(
      1,
      'AnimationBuilder.build 1 call'
    );
    expect(animationFactorySpy.create.calls.count()).toBe(
      1,
      'AnimationFactory.create 1 call'
    );
  });
});
