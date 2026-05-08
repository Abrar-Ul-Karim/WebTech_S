$(document).ready(function () {

    loadBooks();

    $("#bookForm").submit(function (e) {

        e.preventDefault();

        let id = $("#book_id").val();

        let action = "add";

        if (id != "") {
            action = "update";
        }

        $.ajax({

            url: "../ajax/handler.php",

            type: "POST",

            data: {

                action: action,
                id: id,
                title: $("#title").val(),
                author: $("#author").val(),
                category: $("#category").val(),
                status: $("#status").val()

            },

            success: function () {

                $("#bookForm")[0].reset();

                $("#book_id").val("");

                loadBooks();
            }
        });
    });
});

function loadBooks()
{
    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: { action: "fetch" },

        success: function (data) {

            $("#bookData").html(data);
        }
    });
}

function deleteBook(id)
{
    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: {

            action: "delete",
            id: id
        },

        success: function () {

            loadBooks();
        }
    });
}

function editBook(id)
{
    $.ajax({

        url: "../ajax/handler.php",

        type: "POST",

        data: {

            action: "edit",
            id: id
        },

        success: function (data) {

            let book = JSON.parse(data);

            $("#book_id").val(book.id);

            $("#title").val(book.title);

            $("#author").val(book.author);

            $("#category").val(book.category);

            $("#status").val(book.status);
        }
    });
}

