<template>
  <router-link to="/">
    <img
      class="logo"
      src="../../public/img/imglogo/logo.png"
      alt="Logo My Project"
      title="Logo My Project"
    />
  </router-link>
</template>
<script>
export default {
  name: "MyFooter"
};
</script>
<style lang="scss" scoped>
.logo {
  margin: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 4rem;
  z-index: 3;
}
</style>

