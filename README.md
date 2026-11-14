<div align="center">

# SumUp OpenAPI

[![Documentation][docs-badge]](https://developer.sumup.com)

</div>

Explore SumUp's REST API with OpenAPI specifications and ready-to-use Postman and Bruno collections. For endpoint documentation and integration guides, visit the [SumUp developer portal](https://developer.sumup.com/api).

## OpenAPI specifications

Download a specification to use with API clients, code generators, and other OpenAPI tools:

| Version | JSON | YAML |
| --- | --- | --- |
| OpenAPI 3.0 | [openapi.json](./openapi.json) | [openapi.yaml](./openapi.yaml) |
| OpenAPI 3.1 | [openapi31.json](./openapi31.json) | [openapi31.yaml](./openapi31.yaml) |

## API collections

### Postman

Import [SumUpAPICollection.json](./SumUpAPICollection.json), or paste this URL into Postman's import dialog:

```text
https://raw.githubusercontent.com/sumup/sumup-openapi/refs/heads/main/SumUpAPICollection.json
```

You can also fork the collection in [SumUp's public Postman workspace](https://www.postman.com/sumupengineering/workspace/sumup-developers).

In the collection's **Authorization** tab, select **Bearer Token** and enter your [SumUp API key](https://developer.sumup.com/api-keys).

### Bruno

Import the collection directly in Bruno using its [GitHub integration](https://docs.usebruno.com/git-providers/github). Public repositories can be imported without signing in to GitHub.

1. In Bruno, open **Import Collection** and select the **GitHub** tab.
2. Search for `sumup/sumup-openapi`, select the repository, and click **Clone**.
3. Select the **SumUp API** collection in the `bruno` directory and click **Open**.
4. Select the **Production server** environment to set the API base URL.
5. In the collection settings, select **Bearer Token** authentication and enter your [SumUp API key](https://developer.sumup.com/api-keys).

Pull updates with Git to get the latest collection. Keep your API key in a local secret variable and reference it from the authentication settings. Keep custom requests in a separate collection so you can update this one without losing your changes.

## SDKs and tools

### Server SDKs

- [Node.js](https://github.com/sumup/sumup-ts)
- [Python](https://github.com/sumup/sumup-py)
- [Java](https://github.com/sumup/sumup-java)
- [Go](https://github.com/sumup/sumup-go)
- [PHP](https://github.com/sumup/sumup-php)
- [Rust](https://github.com/sumup/sumup-rs)
- [.NET](https://github.com/sumup/sumup-dotnet) for C#, VB.NET, and F#
- [AI Toolkit](https://github.com/sumup/sumup-ai)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and collection generation.

[docs-badge]: https://img.shields.io/badge/SumUp-documentation-white.svg?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgY29sb3I9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIyLjI5IDBIMS43Qy43NyAwIDAgLjc3IDAgMS43MVYyMi4zYzAgLjkzLjc3IDEuNyAxLjcxIDEuN0gyMi4zYy45NCAwIDEuNzEtLjc3IDEuNzEtMS43MVYxLjdDMjQgLjc3IDIzLjIzIDAgMjIuMjkgMFptLTcuMjIgMTguMDdhNS42MiA1LjYyIDAgMCAxLTcuNjguMjQuMzYuMzYgMCAwIDEtLjAxLS40OWw3LjQ0LTcuNDRhLjM1LjM1IDAgMCAxIC40OSAwIDUuNiA1LjYgMCAwIDEtLjI0IDcuNjlabTEuNTUtMTEuOS03LjQ0IDcuNDVhLjM1LjM1IDAgMCAxLS41IDAgNS42MSA1LjYxIDAgMCAxIDcuOS03Ljk2bC4wMy4wM2MuMTMuMTMuMTQuMzUuMDEuNDlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+
