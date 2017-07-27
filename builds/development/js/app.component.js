System.register(['angular2/core', './client-item.component', './search-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, client_item_component_1, search_pipe_1;
    var AppComponent, CLIENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (client_item_component_1_1) {
                client_item_component_1 = client_item_component_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.clients = CLIENTS;
                }
                AppComponent.prototype.showArtist = function (item) {
                    console.log(item);
                    this.currentArtist = item;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'partials/app.html',
                        directives: [client_item_component_1.ClientItemComponent],
                        pipes: [search_pipe_1.SearchPipe],
                        styleUrls: ['css/app.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            CLIENTS = [
                {
                    "clientName": "Ann Liebmann",
                    "phone": "27-61-433-544",
                    "email": "ann.liebmann@test.com",
                    "policyNo": "0013983997 | 0013656887"
                }, {
                    "clientName": "Ann Summer",
                    "phone": "27-61-422-549",
                    "email": "ann.summer@test.com",
                    "policyNo": "0013999887 | 0013987111"
                },
                {
                    "clientName": "Ann Samuel",
                    "phone": "27-61-411-547",
                    "email": "ann.samuel@test.com",
                    "policyNo": "0013676887 | 0013987222"
                },
                {
                    "clientName": "Mohd Sahil",
                    "phone": "27-61-411-656",
                    "email": "mohd.sahil@test.com",
                    "policyNo": "0013673333 | 0013983334"
                }
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map
