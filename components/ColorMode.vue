<template>
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
    <label class="switch">
        <input type="checkbox" v-model="$colorMode.preference" value="dark" />
        <span class="slider round"></span>
    </label>
</template>

<style src="@assets/css/ColorMode.css"/>