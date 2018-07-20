import { HeroComponent } from './hero.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '../../../node_modules/@angular/core';
describe('HeroComponent', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('hero component has the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'BatMan', strength: 10 };
        expect(fixture.componentInstance.hero.name).toBe('BatMan');
    });

    //testing the rendered HTML
    it('hero component has the correct hero name on HTML template', () => {
        fixture.componentInstance.hero = { id: 1, name: 'BatMan', strength: 10 };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('BatMan');
    });

});