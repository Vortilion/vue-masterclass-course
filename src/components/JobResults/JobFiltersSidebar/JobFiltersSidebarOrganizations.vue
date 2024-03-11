<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              class="mr-3"
              type="checkbox"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from "pinia";

import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";
import CollapsibleAccordion from "@/components/shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    selectOrganization() {
      console.debug(this.selectedOrganizations);
    },
  },
};
</script>
