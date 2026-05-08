<!DOCTYPE html>
<html>

<head>
    <title>Library Management System</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h2>Library Management System</h2>

    <form id="bookForm">

        <input type="hidden" id="book_id">

        <input type="text" id="title" placeholder="Book Title" required>

        <input type="text" id="author" placeholder="Author Name" required>

        <input type="text" id="category" placeholder="Category" required>

        <select id="status">

            <option value="Available">Available</option>

            <option value="Issued">Issued</option>

        </select>

        <button type="submit">Save Book</button>

    </form>

    <br>

    <table border="1" width="100%">

        <thead>

            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
            </tr>

        </thead>

        <tbody id="bookData">

        </tbody>

    </table>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <script src="ajax.js"></script>

</body>
</html>

