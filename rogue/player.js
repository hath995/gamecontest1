
/**
	Player 
**/
Roguegame.Player = function(icon, name, level, hp, exp, atk, def, inventory) {
	this.level = level;
	this.name = name;
	this.hp = hp;
	this.maxhp = hp;
	this.icon = icon;
	this.exp = exp;
	this.atk = atk;
	this.def = def;
	this.inventory = inventory;
	this.locate = locate;
}



