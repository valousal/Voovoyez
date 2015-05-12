<?php
	
namespace media\modele;
use \Illuminate\Database\Eloquent\Model ;

class Images extends Model {
	protected $table = 'atvoo_images';
	protected $primaryKey = 'id';
	public $timestamps=false;



}