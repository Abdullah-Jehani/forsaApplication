<script setup>
import Filters from "../components/listingPage/filters.vue";
import JobsList from "../components/listingPage/jobsList.vue";
import NavBar from "../components/listingPage/navBar.vue";
import Pagination from "../components/listingPage/pagination.vue";
import SearchBar from "../components/listingPage/searchBar.vue";
import footerView from "../components/footer/footerView.vue";
</script>

<template>
  <div dir="ltr">
    <NavBar />
    <SearchBar />
    <div class="flex items-center justify-end mt-20 gap-16 px-16">
      <div class="relative">
        <JobsList />
        <Pagination />
      </div>
      <Filters />
    </div>
  </div>
  <div class="mt-28">
    <footerView />
  </div>
</template>

<style scoped></style>
