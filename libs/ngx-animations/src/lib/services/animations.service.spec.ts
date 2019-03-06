import { AnimationsService } from './animations.service';
import { animations } from '../model/animations-list';
import { AnimationDefinition } from '../model/animation-definition';

describe('AnimationsService (with spies)', () => {
  const animationFactory = { create: any => { } };
  const animationBuilder = { build: any => animationFactory };
  let animationBuilderSpy;
  let animationFactorySpy;
  let addAnimationSpy;
  let animationsService: AnimationsService;

  beforeEach(() => {
    animationBuilderSpy = jest.spyOn(animationBuilder, 'build');
    animationFactorySpy = jest.spyOn(animationFactory, 'create');
    animationsService = new AnimationsService(<any>animationBuilder);
    addAnimationSpy = jest.spyOn(animationsService, 'addAnimations');
  });

  it('should return animation player', () => {
    animationsService.create(animations.bounce(300), null);
    expect(animationBuilderSpy).toHaveBeenCalledTimes(1);
    expect(animationFactorySpy).toHaveBeenCalledTimes(1);
  });

  it('Should addAnimation', () => {
    const animationsCount = Object.keys(animationsService.animations).length;
    const someAnimation: AnimationDefinition = {
      denominator: 1,
      start: { opacity: '1' },
      steps: [{ opacity: '0', transform: 'translate3d(0, 100%, 0' }]
    };
    let customAnimations = [{
      name: "testAnimation",
      animation: someAnimation
    }];

    animationsService.addAnimations(customAnimations);
    expect(Object.keys(animationsService.animations).length).toEqual(animationsCount + 1);
   
    try {
      animationsService.addAnimations(customAnimations);
    } catch (e) {
      expect(e.message).toBe("There is already an animation named testAnimation");
    }

  });
});
