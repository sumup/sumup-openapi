# Contributing

## Source specifications

The OpenAPI specifications in this repository are synced from [sumup/apis](https://github.com/sumup/apis). Make API specification changes there rather than editing the synced files here.

Postman and Bruno collections are generated from `openapi.json` and grouped by API tag. Change the generator configuration or scripts rather than editing generated requests directly.

## Development setup

Install Node.js 24 or later and Make, then install the pinned development dependencies:

```sh
make install-tools
```

Run `make help` to list available targets.

## Generate collections

Generate both collections:

```sh
make generate
```

To generate only one format, run `make generate-postman` or `make generate-bruno`.

The outputs are `SumUpAPICollection.json` and the `bruno` directory. Bruno generation replaces the entire directory, including local edits, so keep personal requests elsewhere. Review and include the generated output when changing the specification or generators. Never commit credentials.

Generator versions are pinned in `package.json` and `package-lock.json`. Include both files when updating dependencies.

## Automation and publishing

The generation workflow regenerates and commits both collections on internal pull requests that change `openapi.json`, the Makefile, generator dependencies, scripts, or the workflow itself. It can also be run manually. Pull requests from forks do not run this workflow; generate the collections locally when contributing from a fork.

On pushes to `main`, the Postman upload workflow regenerates the Postman collection and updates the existing collection in SumUp's public workspace. Configure the `POSTMAN_API_KEY` repository secret with access to that collection before enabling publishing.

Bruno collections are distributed through this Git repository. Users clone the repository and pull updates; there is no separate upload step.
