<?php

require "vendor/autoload.php";
use \media\controller ;
use \media\modele\DataBaseConnect ;

$app = new \Slim\Slim(); //Slim init

DataBaseConnect::setConfig("config/config.ini"); 



// FRONT-END //
$app->get('/', function() use ($app) {
	$c = new controller\MainController;
	$c->displayIndex();

});

/*$app->get('/realisations', function() use ($app) {
	$c = new controller\MainController;
	$c->displayProjects();

});*/
// FRONT-END //



$app->run();