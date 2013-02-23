
/**
	Item object
**/
Roguegame.Item = function(itemid,icon, name, value, def, atk, hp) {
	this.itemid = itemid;
	this.icon = icon;
	this.name = name;
	this.value = value;
	this.def = def;
	this.atk = atk;
	this.hp = hp;
	this.canStack //true or false
	this.uses //if canstack, how many, i.e 10x potion or wand of 10 zap monsters or so on
}

Roguegame.Inventory = function(itemids, items)


