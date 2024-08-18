<script lang="ts">
    import { loadLocalizations, setLocalization, LocalizedText } from '$lib/index.js';
    import test from './test.json';

    loadLocalizations(test);
</script>

<div>
    <h1>
        <LocalizedText key="new_key" />
    </h1>
    <br />
    <button
        on:click={() => {
            setLocalization('EN');
        }}
    >
        <LocalizedText key="english" />
    </button>
    <button
        on:click={() => {
            setLocalization('UK');
        }}
    >
        <LocalizedText key="ukrainian" />
    </button>
</div>
