<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>BeeSweeper Game!</title>
</head>

<body>
    <h1>BeeSweeper Game!</h1>
    ENTER YOUR NAME TO START<br>
    <form method="GET" action="game.php">
        <input type="text" name="name" placeholder="Your Name Here" required="">
        <input type="submit" value="START">
    </form><br><br>
    <h2>HIGH SCORES</h2>
    <hr>
    <?php
    if (isset($_POST['name'])){
        if (file_exists("./score.json")){
            $data =  json_decode(file_get_contents("./score.json"),true);
            }else{
            $data = array();
            }
        $data[$_POST['name']] = $_POST['score'];
        arsort($data);
        file_put_contents("./score.json",json_encode( $data ));
    }
    if (file_exists("./score.json")){
        $data =  json_decode(file_get_contents("./score.json"),true);
        foreach ($data as $name => $score) {
            echo "<b>$name</b> $score<br>";
        }
    }
    ?>
</body>

</html>