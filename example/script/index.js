$( document ).ready( function () {
	const taigi = { id: 'tws', name: 'Tâi-gí' };
	//please note, this system not support multiple entry
	let additionalWord = [
		['banbana', 'bān-bān-á'],
		[ 'taigi', 'Tâi-gí' ],
		[ 'taioan', 'Tâi-oân' ],
		[ 'pehoeji', 'Pe̍h-ōe-jī' ],
		[ 'goa', 'góa' ],
		[ 'goabin', 'gōa-bīn' ],
		[ 'goakhau', 'gōa-kháu'],
		[ 'choekin', 'chòe-kīn' ],
		[ 'mihkiann', 'mi̍h-kiāⁿ' ],
		[ 'bikok', 'Bí-kok' ],
		[ 'bohoattoo', 'bô-hoat-tō͘'  ],
		[ 'thinnoooo', 'thiⁿ-o͘-o͘' ]
	];
	
	$.ime.twsInjector(taigi, { id: 'tws-LATN', name: 'Tâi-gí lô-má-jī', source: 'tws-latin.js', wordTable: additionalWord });
	//$.ime.twsInjector(taigi, { id: 'tws-simple', name: 'Tâi-gí (kan-nā siaⁿ-tiāu)', source: 'tws-simple.js' });
	
	
	var imeDom = $( 'input, textarea, [contenteditable]' );
	//activate ime
	$.ime.preferences.setLanguage('tws');
	imeDom.ime({ languages: ['tws'] });
});