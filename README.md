# AppLoc for Svelte

Seamless localization management for your Svelte projects.

## Installation

```bash
npm install @apploc/svelte
```

## Initialization

1.  Initialize the project using [AppLoc CLI](https://www.npmjs.com/package/@apploc/cli):

    ```bash
    npm install @apploc/cli --save-dev
    npx apploc init --path "/src/routes/localization.json"
    npx apploc update
    ```

    > You can read more about the CLI [here](https://github.com/apploc-dev/cli#readme).

2.  Load localization.json in the <code>/src/routes/+layout.svelte</code>:

    ```svelte
    <script>
        import { loadLocalizations } from '@apploc/svelte';
        import localizations from './localization.json';

        // Load the localization data into the application
        loadLocalizations(localizations);
    </script>

    <slot />
    ```

## Usage

### Displaying Localized Text

Use the **LocalizedText** component to display text in the current language:

```svelte
<script>
    import { LocalizedText } from '@apploc/svelte';
</script>

<div>
    <h1>
        <LocalizedText key="new_key" />
    </h1>
</div>
```

### Switching Localizations

You can use the **setLocalization** function to dynamically switch between languages. This allows users to choose their preferred language at runtime:

```svelte
<script>
    import { setLocalization, LocalizedText } from '@apploc/svelte';
</script>

<div>
    <h1>
        <LocalizedText key="new_key" />
    </h1>
    <br />
    <button
        on:click={() => {
            setLocalization('EN'); // Switch to English
        }}
    >
        <LocalizedText key="english" />
    </button>
    <button
        on:click={() => {
            setLocalization('UK'); // Switch to Ukrainian
        }}
    >
        <LocalizedText key="ukrainian" />
    </button>
</div>
```

## License

This project is licensed under the Apache-2.0 license. See the [LICENSE.md](LICENSE.md) file for details.
