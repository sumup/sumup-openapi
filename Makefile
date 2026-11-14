# Make this makefile self-documented with target `help`
.PHONY: help
.DEFAULT_GOAL := help
help: ## Show help
	@grep -Eh '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install-tools
install-tools: ## Install development dependencies
	npm ci --ignore-scripts

.PHONY: generate
generate: ## Generate Postman and Bruno collections
	npm run generate

.PHONY: generate-postman
generate-postman: ## Generate the Postman collection
	npm run generate:postman

.PHONY: generate-bruno
generate-bruno: ## Generate the Bruno collection
	npm run generate:bruno
