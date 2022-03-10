<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curd with javascript fetch</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <div class="alerts">
            <div class="alert alert-success">gg</div>
            <div class="alert alert-danger">ee</div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="container">
            <h1>Crud with Javascript fetch api</h1>
        </div>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3>Students ( <span id="total"></span> )</h4>
                    <button class="btn btn-primary" id="create">Create</button>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                   
                </tbody>
            </table>
        </div>
    </div>

    <!-- create student model -->

    <!-- <div class="container"> -->
    <div class="modal" id="create-student">
        <div class="modal-body">
            <h3>Create Student</h3>
            <div class="form-group">
                <label for=""><b>Enter your Name</b></label>
                <input type="text" placeholder="Enter your name" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for=""><b>Enter your Age</b></label>
                <input type="number" placeholder="Enter your age" id="age" class="form-control">
            </div>
            <div class="form-group">
                <label for=""><b>Enter your Country</b></label>
                <input type="text" placeholder="Enter your country" id="country" class="form-control">
            </div>
            <div class="form-group buttons">
                <button class="btn btn-success" type="submit" id="save">Save</button>
                <button class="btn btn-danger" type="submit" id="close">Close</button>
            </div>
        </div>
    </div>
    <!-- </div> -->

    <!-- edit student -->
    <div class="modal" id="update-student">
        <div class="modal-body">
            <h3>Update Student</h3>
            <div class="form-group">
                <label for=""><b>Enter your Name</b></label>
                <input type="text" placeholder="Enter your name" id="edit_name" class="form-control">
                <input type="hidden" placeholder="Id" id="id" class="form-control">
            </div>
            <div class="form-group">
                <label for=""><b>Enter your Age</b></label>
                <input type="number" placeholder="Enter your age" id="edit_age" class="form-control">
            </div>
            <div class="form-group">
                <label for=""><b>Enter your Country</b></label>
                <input type="text" placeholder="Enter your country" id="edit_country" class="form-control">
            </div>
            <div class="form-group buttons">
                <button class="btn btn-success" id="update" type="submit">Update</button>
                <button class="btn btn-danger" type="submit" id="update_close">Close</button>
            </div>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>

</html>
