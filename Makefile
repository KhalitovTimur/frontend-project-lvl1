install:
	npm install
brain-games:
	node src/bin/brain-games.js
publish:
	npm publish --dry-run
cli:
	node src/cli.js
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
brain-calc:
	node src/bin/brain-calc.js
brain-gcd:
	node src/bin/brain-gcd.js
brain-even:
	node src/bin/brain-even.js
brain-progression:
	node src/bin/brain-progression.js
brain-prime:
	node src/bin/brain-prime.js