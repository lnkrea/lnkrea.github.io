<script>
    export let placeholder = "search for a course";
</script>

<input type="text" placeholder={placeholder} />

<style lang="scss">
    input {
        padding: 10px;
        margin-bottom: 1em;

        width: 100%;
        border: var(--main-border-dark);

        font-family: inherit;
        font-size: inherit;
        color: var(--dark);

        box-shadow: inset 0 6px 8px rgba(154, 99, 133, 0.25); // add inner shadow from the top
    }
</style>