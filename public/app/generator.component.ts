import { Component, OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Challenge } from './challenge';
import { GeneratorService } from './generator.service';

@Component({
    selector: 'generator',
    styles: [],
    template: `
            <p>Front-end framework: {{challenge.frontend}}</p>
            <p>Back-end: {{challenge.backend}}</p>
            <p>Database: {{challenge.database}}</p>
            `,
    providers: [GeneratorService]
})



export class GeneratorComponent implements OnInit {
    challenge: Challenge;

    constructor(private generatorService: GeneratorService) { }

    getChallenge(): void {
        this.generatorService.getChallenge().then(challenge => this.challenge = challenge);
    }

    ngOnInit(): void {
        this.getChallenge()
    }
}

bootstrap(GeneratorComponent)