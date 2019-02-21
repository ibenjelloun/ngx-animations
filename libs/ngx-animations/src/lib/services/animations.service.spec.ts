import { AnimationsService } from './animations.service';
import { animations } from '../model/animations-list';

describe('AnimationsService (with spies)', () => {
  const animationFactory = { create: any => {} };
  const animationBuilder = { build: any => animationFactory };
  let animationBuilderSpy;
  let animationFactorySpy;
  let animationsService: AnimationsService;

  beforeEach(() => {
    animationBuilderSpy = jest.spyOn(animationBuilder, 'build');
    animationFactorySpy = jest.spyOn(animationFactory, 'create');
    animationsService = new AnimationsService(<any>animationBuilder);
  });

  it('should return animation player', () => {
    animationsService.create(animations.bounce(300), null);
    expect(animationBuilderSpy).toHaveBeenCalledTimes(1);
    expect(animationFactorySpy).toHaveBeenCalledTimes(1);
  });
});
