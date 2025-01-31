<script>
    export let to = '';
</script>

<a href="{to}">
    <slot></slot>
</a>

<style>
    a {
        text-decoration: none;
        color: var(--dark);
    }

    a:hover {
        text-decoration: underline;
    }
</style>