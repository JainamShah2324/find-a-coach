<template>
    <section>
        Filters
    </section>
    <section>
        <div class="control">
            <button>Refresh</button>
            <router-link tag="button" :to="{ name: 'register-couch' }">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCourses" :key="coach.id">
                {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>
            No coaches found.
        </h3>
    </section>
</template>

<script>
export default {
    name: "CoachesList",
    computed: {
        filteredCourses() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            console.log(this.$store.getters['coaches/hasCoaches']);
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>