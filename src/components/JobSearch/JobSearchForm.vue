<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon icon="magnifying-glass" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="role" class="absolute -top-10 left-0">Role</label>

        <!-- placeholder attribute will automatically be attached to components' top level element in template -->
        <text-input id="role" v-model="role" placeholder="Software Engineer" />
      </div>

      <span
        class="flex h-full items-center border-x border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute -top-10 left-0">Where?</label>

        <!-- placeholder attribute will automatically be attached to components' top level element in template -->
        <text-input
          id="location"
          v-model="location"
          placeholder="Los Angeles"
        />
      </div>
    </div>

    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
