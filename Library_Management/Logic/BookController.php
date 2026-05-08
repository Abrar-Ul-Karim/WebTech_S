<?php

require_once("../DB_Operations/DBLogic.php");

function insertBook()
{
    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    return addBook($title, $author, $category, $status);
}

function showBooks()
{
    return getBooks();
}

function removeBook()
{
    $id = $_POST['id'];

    return deleteBook($id);
}

function editBook()
{
    $id = $_POST['id'];

    return getBookById($id);
}

function modifyBook()
{
    $id = $_POST['id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    return updateBook($id, $title, $author, $category, $status);
}

?>


