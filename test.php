<?php
// $x = 025;
// echo $x / 5 . "\n";

// echo 025;

// $a = "foo";
// function foo() {
//     echo "hey";
// }
// $a();

function foo($args) {
    $z = $args;
    $args += 1;
    return $z;
}

$x = 3;
$y = foo($x);
echo $x;
?>