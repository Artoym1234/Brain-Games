install:
			npm ci

brain-games: # запуск игры
			node bin/brain-games.
	
brain-even: # запуск игры
			node bin/brain-even.js

brain-calc: # запуск игры
			node bin/brain-calc.js	
	
publish:
			npm publish --dry-run

lint:
			npx eslint .
