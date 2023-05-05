# Clinia UI Library

## Description

Clinia UI is a modular component library based on Chakra UI.  
It exports various React components as well as a Chakra UI theme.

---

## Library structure

The library is composed of **packages** and a **storybook**.  
Below is a non-exhaustive list of the various packages in the library.

| Package           | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `react`           | Exports basic Chakra UI components as is                                                    |
| `icons`           | Exports Clinia custom icons as single built files (see [Adding icons](#adding-icons))       |
| `theme`           | Chakra UI theme with Clinia colors, fonts, spaces and more                                  |
| Custom components | Various Clinia cutom components (see [Adding custom components](#adding-custom-components)) |

For more information on the storybook package, see the [Storybook](#storybook) section.

---

## Adding custom components

Each custom components should be exported as a separate package under `packages/`.  
If the custom component is an extension of a basic Chakra UI component, the export for the Chakra UI component should be removed from the `react` package.

---

## Adding icons

Each icon added to the `icons/` package should follow these guidelines:

- Chakra UI [guidelines](https://chakra-ui.com/docs/components/icon#creating-your-custom-icons)
- 1024 x 1024 baseline in svg

---

## Storybook

The storybook configuration for the Clinia UI library is under `docs`.
It should have stories for the elements exported in the `packages`, which should be styled according to the `theme` package.

## Code owners

- [mariloufarmer](https://github.com/mariloufarmer)
- [xWiiLLz](https://github.com/xWiiLLz)
