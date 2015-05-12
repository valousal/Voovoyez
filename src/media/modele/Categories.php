<?php	
namespace media\modele;
use \Illuminate\Database\Eloquent\Model ;


class Categories extends Model {
	protected $table = 'atvoo_categories';
	protected $primaryKey = 'id';
	public $timestamps=false;

}