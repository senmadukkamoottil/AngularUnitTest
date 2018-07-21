import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { NO_ERRORS_SCHEMA, Input, Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/observable/of';
import { Hero } from '../hero';

describe('HerosComponent', () => {
    
    let fixture: ComponentFixture<HeroesComponent>;

    //moking the child component HeroComponent
    @Component({
        selector: 'app-hero',
        template: '<div></div>',
      })
      class FakeHeroComponent {
        @Input() hero: Hero;
      }
    
    //moking injected service
    let mokHeroService = jasmine.createSpyObj(['getHeroes', 'deleteHero', 'updateHero']);

    let HEROES = [
        {id: 1, name: 'BatMan', strength: 8},
        {id: 2, name: 'HeMan', strength: 20}
    ]
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            // the injected service
            providers: [
            { provide: HeroService, useValue: mokHeroService }
            ],
            // schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });
    
     it('should return heroes from the HeroService', () => {
         mokHeroService.getHeroes.and.returnValue(of(HEROES));
         fixture.detectChanges();
         expect(fixture.componentInstance.heroes.length).toBe(2);
     })
    

});