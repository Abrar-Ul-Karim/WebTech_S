<?php

require_once("../Logic/BookController.php");

$action = $_POST['action'];

if ($action == "add") {

    insertBook();

}

else if ($action == "fetch") {

    $books = showBooks();

    while($row = mysqli_fetch_assoc($books)) {

        echo "
        <tr>
            <td>{$row['id']}</td>
            <td>{$row['title']}</td>
            <td>{$row['author']}</td>
            <td>{$row['category']}</td>
            <td>{$row['status']}</td>

            <td>
                <button onclick='editBook({$row['id']})'>Edit</button>

                <button onclick='deleteBook({$row['id']})'>
                    Delete
                </button>
            </td>
        </tr>
        ";
    }
}

else if ($action == "delete") {

    removeBook();
}

else if ($action == "edit") {

    $book = editBook();

    echo json_encode($book);
}

else if ($action == "update") {

    modifyBook();
}

?>


