<script lang="ts">
    import { localizations, currentLocalization } from './locale.js';
    import { derived } from 'svelte/store';

    export let key;

    const translatedText = derived(
        [localizations, currentLocalization],
        ([$translations, $currentLanguage]) => $translations[$currentLanguage][key] || '?'
    );
</script>

{$translatedText}
