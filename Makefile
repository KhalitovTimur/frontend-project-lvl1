install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run
cli:
	node src/cli.js
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
