.PHONY: docker-run
docker-run: fix-node-modules-permissions
	docker-compose up server client

.PHONY: docker-test
docker-test:
	docker-compose up selenium hermione

.PHONY: fix-node-modules-permissions
fix-node-modules-permissions:
	sudo chown -R $$USER:1000 client
	sudo chmod -R g+w client
	sudo chown -R $$USER:1000 server
	sudo chmod -R g+w server
	sudo chown -R $$USER:1000 hermione
	sudo chmod -R g+w hermione

.PHONY: run-unit-tests
run-unit-tests:
	npm --prefix server run test
	npm --prefix client run test

.PHONY: install-dependencies
install-dependencies: fix-node-modules-permissions
	npm --prefix server ci
	npm --prefix client ci

.PHONY: install-all-dependencies
install-all-dependencies: fix-node-modules-permissions
	npm --prefix server ci
	npm --prefix client ci
	npm --prefix hermione ci

.PHONY: run-server
	npm --prefix server run server

.PHONY: run-client
	npm --prefix client run start

.PHONY: run-selenium
	selenium-standalone start

.PHONY: run-integration-tests
	npm --prefix hermione run hermione:local
