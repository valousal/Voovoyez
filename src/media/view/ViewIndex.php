<?php
namespace media\view;

class ViewIndex extends ViewMain {

	public function __construct($projets,$images,$retouches,$thumb) { 
		parent::__construct();
		$this->layout = 'accueil.html.twig';

		$this->arrayVar['projets'] = $projets;
		$this->arrayVar['images'] = $images; 
		$this->arrayVar['retouches'] = $retouches; 
		$this->arrayVar['thumbs'] = $thumb; 
	}
} 