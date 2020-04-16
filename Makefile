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
