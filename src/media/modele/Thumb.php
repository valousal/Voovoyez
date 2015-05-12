<?php	
namespace media\modele;
use \Illuminate\Database\Eloquent\Model ;


class Thumb extends Model {
	protected $table = 'atvoo_thumb';
	protected $primaryKey = 'id';
	public $timestamps=false;

}