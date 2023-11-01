<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id; // always has given parameter from route as attribute, in this case id (route has :id)
    },
  },
};
</script>
