<?php

class Contact
{
    public $name;
    public $lastname = "";

    function print()
    {
        echo $this->name;
        echo " ";
        echo $this->lastname;
        echo "\n";
    }

    function __constructor($name, $lastname)
    {
        $this->name = $name;
        $this->lastname = $lastname;
    }
}

$c = new Contact("Azamat", "Nigmatullin");

$c->name = "Azamat";
$c->lastname = "Nigmatullin";


$c->print();

