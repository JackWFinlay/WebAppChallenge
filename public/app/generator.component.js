"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var generator_service_1 = require('./generator.service');
var GeneratorComponent = (function () {
    function GeneratorComponent(generatorService) {
        this.generatorService = generatorService;
    }
    GeneratorComponent.prototype.getChallenge = function () {
        var _this = this;
        this.generatorService.getChallenge().then(function (challenge) { return _this.challenge = challenge; });
    };
    GeneratorComponent.prototype.ngOnInit = function () {
        this.getChallenge();
    };
    GeneratorComponent = __decorate([
        core_1.Component({
            selector: 'generator',
            styles: [],
            template: "\n            <p>Front-end framework: {{challenge.frontend}}</p>\n            <p>Back-end: {{challenge.backend}}</p>\n            <p>Database: {{challenge.database}}</p>\n            ",
            providers: [generator_service_1.GeneratorService]
        }), 
        __metadata('design:paramtypes', [generator_service_1.GeneratorService])
    ], GeneratorComponent);
    return GeneratorComponent;
}());
exports.GeneratorComponent = GeneratorComponent;
platform_browser_dynamic_1.bootstrap(GeneratorComponent);
//# sourceMappingURL=generator.component.js.map