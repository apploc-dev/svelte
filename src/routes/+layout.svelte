<script lang="ts">
    import { loadLocalizations } from '$lib/index.js';
    import localizations from './test.json';

    // Load the localization data into the application
    loadLocalizations(localizations);
</script>

<slot />
