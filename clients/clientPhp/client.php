<?php

$bands = file_get_contents('http://localhost:3000/bands');
echo $bands;
