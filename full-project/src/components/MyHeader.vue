<template>
  <header>
    <div>
      <router-link to="/">
        <img
          class="logo"
          src="../../public/img/imglogo/logo.png"
          alt="Logo My Project"
          title="Logo My Project"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>


  <style scoped>
header {
  margin: 0;
  padding: 0.5em 5em 0.5em;
  color: #efefef;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  z-index: 1;
}

.logo {
  height: 5rem;
  margin: 1rem -2rem;
}
header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: skewY(-4deg);
  background: #3a62e4;
  transform-origin: bottom left;
  z-index: -1;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: skewY(8deg);
  background: #3a62e4;
  transform-origin: bottom right;
  z-index: -1;
}
</style>
