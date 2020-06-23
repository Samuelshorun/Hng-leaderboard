<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Leadership Board</title>

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="css/leader.css">

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>

    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header"><a href="#">
                <span><img src="img/HNG.png" alt="HNG-LOGO"><h3>HNG INTERNSHIP</h3></span>
                <strong>HNG</strong></a>
            </div>

            <ul class="list-unstyled components mb-5">
                
                <li>
                    <a href="#">
                        <i class="fas fa-home"></i>
                        DashBoard
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-user"></i>
                        Interns
                    </a>
                </li>
                <li class="active">
                    <a href="#">
                        <i class="fas fa-align-left"></i>
                        Leaderboard
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-paper-plane"></i>
                        Mentors
                    </a>
                </li>
            </ul>
            <div class="signup d-flex flex-column mt-5">
                <h4 class="text-align-center mx-auto"><a class="btn btn-dark" href="#">Sign out</a></h4><br>

                <p class="copy mx-auto">&copy HNG INTERNSHIP 2020</p>


            </div>
        </nav>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light">

                    <button type="button" id="sidebarCollapse" class="btn btn-dark">
                        <i class="fas fa-align-left"></i>
                        <span></span>
                    </button>
            </nav>
                
    <div class="container">
                    <!-------------------------------------------Table------------------------------------------------------->

        <div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>SLACK NAME</th>
                        <th>E-MAIL ADRESS</th>
                        <th>POINT</th>
                        <th class="pl-1 pl-lg-5">SHARE</th>
                    </tr>
                </thead>
                <?php
                $row = 1;
                if (($handle = fopen("./file/test.csv", 'r')) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $num = count($data);
                        echo "<p> $num fields in line $row: <br /></p>\n";
                        $row++;
                        for ($c=0; $c < $num; $c++) {
                            echo $data[$c] . "<br />\n";
                        }
                    }
                    fclose($handle);
                }
                ?>
      </table>


                    <!---------------------------------------------TABLE END------------------------------------------------>



                </div>
            <div class="d-flex justify-content-between flex-row text-center">
                <input type="button" class="btn btn-primary" id="first" onclick="firstPage()" value="first" />
                <input type="button" class="btn btn-primary" id="next" onclick="nextPage()" value="next" />
                <input type="button" class="btn btn-primary" id="previous" onclick="previousPage()" value="previous" />
                <input type="button" class="btn btn-primary" id="last" onclick="lastPage()" value="last" />
            </div>
        </div>
    </div>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
   <script src="js/jquery-3.5.1.min.js"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/dash.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>
</body>

</html>