let universe = {
	infinity: Infinity,
	good: ['cats', 'love', 'rock-n-roll'],
	evil: {
		bonuses: ['cookies', 'great look'],
		pop: {
			push: {
				slice: {
					cats: 'woohoo'
				}
			}
		}
	}
};

const allFreeze = (obj) => {

	// Получаем имена свойств из объекта obj
	let propNames = Object.getOwnPropertyNames(obj);

	// Замораживаем свойства для заморозки самого объекта
	propNames.forEach( (name) => {
		let prop = obj[name];

		// Заморозка свойства prop, если оно объект
		if (typeof prop == 'object' && prop !== null)
			allFreeze(prop);
	});

	// Заморозить сам объект obj 
	return Object.freeze(obj);
};

allFreeze(universe);
