<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/p5.min.js"></script>
    <script src="js/p5.dom.min.js"></script>
    <script src="js/score.js"></script>
    <script src="js/cell.js"></script>
    <script src="js/game.js"></script>
    <title>BeeSweeper Game!</title>
</head>

<body>
    <h1>BeeSweeper Game!</h1>
    Remember Every Click Counts !
    <form name="scoreboard" id="scoreboard" method="POST" action="index.php">
        SCORE: <input type="text" name="score" id="score" readonly value="0">
        <input type="hidden" name="name" value="<?php echo $_GET["name"]; ?>">
        <input type="submit" value="Save">

    </form> <br>
</body>

</html>