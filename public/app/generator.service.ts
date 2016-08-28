import { Injectable } from '@angular/core';
import { Challenge } from './challenge';

@Injectable()
export class GeneratorService {
    challenge: Challenge = {
        frontend: 'React',
        backend: 'Laravel',
        database: 'Oracle'
    };

    getChallenge(): Promise<Challenge> {
        console.log(this.challenge);
        return Promise.resolve(this.challenge);
    }
}