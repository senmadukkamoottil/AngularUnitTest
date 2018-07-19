import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', ()=>{
    it('should return weak if 5 is passed', ()=>{
        let p = new StrengthPipe();
        expect(p.transform(5)).toEqual('5 (weak)');
    });

    it('should return strong if value between 10 and 20', ()=> {
        let p = new StrengthPipe();
        expect(p.transform(12)).toEqual('12 (strong)');
    });

    it('should return unbelievable if value greater than 20', ()=>{
        let p = new StrengthPipe();
        expect(p.transform(20)).toEqual('20 (unbelievable)');
    })
});