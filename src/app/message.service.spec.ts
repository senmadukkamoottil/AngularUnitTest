import { MessageService } from './message.service';
import { Message } from '../../node_modules/@angular/compiler/src/i18n/i18n_ast';

describe('MessageService', ()=>{
    let msgService: MessageService;

    it('messages length should be initally zero', ()=>{
        msgService = new MessageService();

        expect(msgService.messages.length).toBe(0);
    });

    it('message length should be 1 after add function', ()=>{
        msgService = new MessageService();
        msgService.add('Message 1');
        expect(msgService.messages.length).toBe(1);
    });

    it('message length should be 0 after clear function', ()=>{
        msgService = new MessageService();
        msgService.add('Message1');
        msgService.clear();
        expect(msgService.messages.length).toBe(0);
    });
});