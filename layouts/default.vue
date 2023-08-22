<template>
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/lore">Lore</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Adventure Log</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Achievements">Achievements</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <slot />
    </div>
  </template>