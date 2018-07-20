import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs/observable/of'; 


describe('HerosComponent', () => {
    let component: HeroesComponent;
    let mokHeroService;
    let Heros;

    beforeEach( () => {
        mokHeroService = jasmine.createSpyObj(['getHeroes', 'getHero', 'deleteHero']);
        component = new HeroesComponent(mokHeroService);
        Heros = [
            {   id: 1, name: 'Spider', strength: 8  },
            {   id: 2, name: 'Super Dude', strength: 20    },
            {   id: 3, name: 'Power Man', strength: 25    }
    ];
    });

    it('remove a hero with function deleteHero', () => {
        mokHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = Heros;
        component.delete(component.heroes[0]);

        expect(component.heroes.length).toBe(2);
    });

    it('remove a hero with same id with function deleteHero', () => {
        mokHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = Heros;
        component.delete(component.heroes[0]);

        expect(component.heroes.find(item => item.id === 1)).toBeFalsy();
    });
});