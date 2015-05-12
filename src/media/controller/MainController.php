<?php
namespace media\controller ;
use \media\view ;
use \media\modele\Categories ;
use \media\modele\Images ;
use \media\modele\Projets ;
use \media\modele\Retouches ;
use \media\modele\Thumb ;


class MainController extends AbstractController{
	public function __construct(){
	
	}

	public function displayIndex(){
		$projets = Projets::all();
        $images = Images::all();
        $retouches = Retouches::all();
        $thumb = Thumb::all();
		$v = new view\ViewIndex($projets,$images,$retouches,$thumb);
		$v->display();
	}

	/*public function displayProjects(){
        $projets = Projets::all();
        $images = Images::all();
		$v = new view\ViewProjects($projets,$images);
		$v->display();
	}*/

	public function displayError($message){
		$v = new view\ViewError($message);
		$v->display();
	}

}