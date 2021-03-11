<template>
    <h1>Details for Coach</h1>
    <router-view></router-view>
    <router-link :to="{ name: 'coach.contact', params: { id: 'c2' } }">Contact</router-link>
</template>