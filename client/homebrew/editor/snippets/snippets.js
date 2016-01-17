var SpellGen = require('./spell.gen.js');
var ClassTableGen = require('./classtable.gen.js');
var MonsterBlockGen = require('./monsterblock.gen.js');
var ClassFeatureGen = require('./classfeature.gen.js');
var FullClassGen = require('./fullclass.gen.js');

module.exports = [
	/*
	{
		tooltip : 'Full Class',
		icon : 'fa-user',
		snippet : FullClassGen,
	},
	*/
	{
		tooltip : 'Spell',
		icon : 'fa-magic',
		snippet : SpellGen,
	},
	{
		tooltip : 'Class Feature',
		icon : 'fa-trophy',
		snippet : ClassFeatureGen,
	},
	{
		tooltip : 'Note',
		icon : 'fa-sticky-note',
		snippet : function(){
			return [
				"> ##### Time to Drop Knowledge",
				"> Use notes to point out some interesting information. ",
				"> ",
				"> **Tables and lists** both work within a note."
			].join('\n');
		},
	},
	{
		tooltip : 'Table',
		icon : 'fa-list',
		snippet : function(){
			return [
				"##### Cookie Tastiness",
				"| Tastiness | Cookie Type |",
				"|:----:|:-------------|",
				"| -5  | Raisin |",
				"| 8th  | Chocolate Chip |",
				"| 11th | 2 or lower |",
				"| 14th | 3 or lower |",
				"| 17th | 4 or lower |\n\n",
			].join('\n');
		},
	},
	{
		tooltip : 'Monster Stat Block',
		icon : 'fa-bug',
		snippet : MonsterBlockGen,
	},
	{
		tooltip : "Class Table",
		icon : 'fa-table',
		snippet : ClassTableGen,
	},
	{
		tooltip : "Column Break",
		icon : 'fa-columns',
		snippet : function(){
			return "```\n```\n\n";
		}
	},
	{
		tooltip : "New Page",
		icon : 'fa-file-text',
		snippet : function(){
			return "\\page\n\n";
		}
	},
	{
		tooltip : "Vertical Spacing",
		icon : 'fa-arrows-v',
		snippet : function(){
			return "<div style='margin-top:140px'></div>\n\n";
		}
	},
	{
		tooltip : "Insert Image",
		icon : 'fa-image',
		snippet : function(){
			return "<img src='https://i.imgur.com/RJ6S6eY.gif' style='position:absolute;bottom:-10px;right:-60px;' />";
		}
	},

	{
		tooltip : "Page number & Footnote",
		icon : 'fa-book',
		snippet : function(){
			return "<div class='pageNumber'>1</div>\n<div class='footnote'>PART 1 | FANCINESS</div>\n\n";
		}
	}

]

































