import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', ()=>{

    let p: StrengthPipe;

    beforeEach(()=>{
        p = new StrengthPipe();
    })
    it('should return weak if 5 is passed', ()=>{
        expect(p.transform(5)).toEqual('5 (weak)');
    });

    it('should return strong if value between 10 and 20', ()=> {
        expect(p.transform(12)).toEqual('12 (strong)');
    });

    it('should return unbelievable if value greater than 20', ()=>{
        expect(p.transform(20)).toEqual('20 (unbelievable)');
    })
});