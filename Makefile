install:
	npm install
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
cli:
	node src/cli.js
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
