$(document).ready(function () {
    var tasks = [],
        todoInput = $("#todo-input");

    $(".all-posts").on("click", ".single-post .delete-button", function () {
        deleteTask($(this).data('id'));
    });

    todoInput.on('keypress', function (e) {
        if (e.keyCode == 13) { //enter 
            createTask();
        }
    });

    function createTask() {
        var input = todoInput.val();

        if (input.length !== 0) {
            tasks.push(input);
        }

        todoInput.val("");

        renderTasks();
    }

    function renderTasks() {
        var allPosts = $(".all-posts");
        allPosts.empty();

        for (var i = 0; i < tasks.length; i++) {
            allPosts.append('<div class="single-post"><p>' + i + '. ' + tasks[i] + '</p><a href="#" data-id="' + i + '" class="delete-button">Delete</a></div>');
        }
    }

    function deleteTask(i) {
        tasks.splice(i, 1);
        renderTasks();
    }
});
