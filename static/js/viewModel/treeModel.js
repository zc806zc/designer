/**
 * Created by chief on 16/7/16.
 */

define('tree',[],function(){
    // var data = [{
    //         "parent":ko.observable("parent1"),
    //         "child":ko.observableArray(['child1','child2','child3']),
    //     },{
    //         "parent":ko.observable("parent1"),
    //         "child":ko.observableArray(['child1','child2','child3']),
    //     },{
    //         "parent":ko.observable("parent1"),
    //         "child":ko.observableArray(['child1','child2','child3']),
    //     }];
    var data =[
            {
                "id": "01",
                "pid": "root",
                "title": ko.observable("Parent1"),
                "editFlag": ko.observable(false),
                "children":ko.observableArray([{
                    "id": "101",
                    "title": ko.observable("Child11")
                    },{
                        "id": "102",
                        "title": ko.observable("Child12")
                    }])
            },{
                "id": "02",
                "pid": "root",
                "title": "Parent2",
                "editFlag": ko.observable(false),
                "children": ko.observableArray([{
                    "id": "201",
                    "title": ko.observable("Child21")
                    },{
                        "id": "202",
                        "title": ko.observable("Child22")
                    }])
            }
            
        ]
    
    var treeModel = function(data) {
        this.tree = ko.observableArray(data);
        this.editFlag = ko.observable(false);

        this.colTree = function(){
            $(event.target).toggleClass("noline_close");
            $(event.target).toggleClass("noline_open");
            $(event.target).nextAll(".childrenItem").toggleClass("hideChild");
        }.bind(this);
        this.addChild = function(){
            var index = $(event.target).attr("childindex");
            this.tree()[index].children().push({"id": "201", "title": "Child23" });
        }.bind(this);
        this.deleteChild = function(){
            var childindex = $(event.target).attr("childindex");
            var parentindex = $(event.target).parents("[parentindex]").attr("parentindex");
            this.tree()[parentindex].children.splice(childindex,1);
        }.bind(this);
       
    };

    return new treeModel(data);


    
});
