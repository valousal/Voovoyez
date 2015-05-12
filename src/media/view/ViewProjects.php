<?php
namespace media\view;

class ViewProjects extends ViewMain {

	public function __construct($projets,$images) { 
		parent::__construct();
		$this->layout = 'projects.html.twig'; 

		$this->arrayVar['projets'] = $projets;
		$this->arrayVar['images'] = $images;
	}
} 