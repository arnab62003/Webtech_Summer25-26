
<!DOCTYPE html>
<html>
    <head>
    <title>LogIn Page</title>
    </head>
    <body>
        <table>
            <tr>
            <td> <label for="UserName"> User Name: </label></td>
            <td> <input type="text" id="Name" name ="name"></td>
            </tr>
            <tr>
                <td> <label for="password"> Password:  </label></td>
                <td> <input type = "password" id="pass" name ="pass"</td>
            </tr>
            
             
            
        </table>
        <input type ="submit" id="submit" value="LogIn">
        <input type ="submit" id="submit" value="Reset">
        <br>
        <?php
        echo "Hello World";
        ?>
        <br>
    </body>
</html>
<?php
echo "Outside From The HTML";
$text1 = "Hello Php";
$text2 = "Web Technologies [J]";
echo "<h1> $text1  </h1>";
echo "<h1>$text1 $text2 </h1>";   
echo '<h1>'.$text1.'</h1>';   
$number1 = 5;
$number2 = 10;
echo $number1+$number2;
echo "<br>";
if($number1>=5)
    {
        $number1++;
    }    
    else{
        echo $number2;
    }
    echo $number1;
echo"<br>";
$cars = array("ABC", "DEF", "GHI");
var_dump($cars);
echo"<br>";
$cars2 = array("brand"=>"TOYOTA", "Model"=>"CH-R", "Year"=>"2022");
echo  $cars2["brand"]; 
var_dump($cars2);


?>

