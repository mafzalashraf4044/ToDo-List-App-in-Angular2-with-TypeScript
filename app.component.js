System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tasks = [];
                    this.totalTask = 0;
                    this.completed = 0;
                    this.pending = 0;
                }
                AppComponent.prototype.addTask = function (newTask) {
                    var duplicate = false;
                    for (var i = 0; i < this.tasks.length; i++) {
                        if (this.tasks[i] == newTask) {
                            duplicate = true;
                        }
                    }
                    if (!duplicate && (newTask.length > 0)) {
                        this.tasks.push(newTask); //pushing newTask(which is the value of input field) in our tasks array
                        this.totalTask++;
                        this.pending++;
                    }
                    else {
                        if (duplicate)
                            alert("Error!!! Duplicate Task.");
                        else
                            alert("Error!!! Empty Task.");
                    }
                };
                AppComponent.prototype.taskDone = function (status) {
                    if (status) {
                        this.completed++;
                        this.pending--;
                    }
                    else {
                        this.completed--;
                        this.pending++;
                    }
                };
                AppComponent.prototype.deleteTask = function (e, item, taskStatus) {
                    var listItems = document.querySelectorAll("#taskList li");
                    var totListItems = listItems.length;
                    if (totListItems == 1) {
                        e.target.parentNode.innerHTML = '';
                        var index = this.tasks.indexOf(item);
                        this.tasks.splice(index, 1);
                    }
                    else {
                        var taskList = document.getElementById("taskList");
                        taskList.removeChild(e.target.parentNode);
                        var index = this.tasks.indexOf(item);
                        this.tasks.splice(index, 1);
                    }
                    if (taskStatus) {
                        this.completed--;
                    }
                    else {
                        this.pending--;
                    }
                    this.totalTask--;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                        styleUrls: ['./app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map