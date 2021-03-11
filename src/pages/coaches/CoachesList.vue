<template>
    <section>
        Filters
    </section>
    <section>
        <div class="control">
            <button>Refresh</button>
            <router-link tag="button" :to="{ name: 'register-couch' }">Register as Coach</router-link>
        </div>
        <ul>List of coaches</ul>
    </section>
</template>

<script>
export default {
    name: "CoachesList"
}
</script>