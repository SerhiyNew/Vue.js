<template>
  <main>
    <div class="flex">
      <div class="box">
        <div class="flex">
          <img src="../../public/img/imglogo/logo.png" alt="logo img" title="logo img" />
        </div>
        <span class="font-style">
          До Вашої уваги предаставений мій
          <h1>випускний Проект.</h1>
          <br />Це односторінковий застосунок призначений для підбору персоналу.
          Користувач підбирає набір навиків
          та вмінь і отримує працівників,
          що найбільше йому підходять,
          із завчасно сформованої бази даних
        </span>

        <div>
          <router-link tag="button" class="_bttn" to="/skillscard">Let`s start some fun</router-link>
        </div>
      </div>
    </div>
    <myFooter />
  </main>
</template>

<script>
import MyFooter from "../components/MyFooter.vue";

export default {
  name: "greeting",
  components: {
    MyFooter
  }
};
</script>

<style lang="scss" scoped>
$font: "Source Sans Pro", sans-serif;

html,
body {
  max-height: 100vh;
  font-family: $font;
  -webkit-font-smoothing: antialiased;
}
main {
  height: 100vh;
  background-color: #663869;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.font-style,
h1 {
  display: inline-block;
  font-family: "Neucha", cursive;
  font-size: 32px;
  margin: 0;
}
.font-style {
  max-width: 80%;
}
.box {
  text-align: center;
  margin: 0;

  button {
    margin-top: 3rem;
  }
}
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.flex {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

._bttn {
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  width: 270px;
  font-weight: bold;
  padding: 14px 0px;
  border: 3px solid #644cad;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  &:before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #644cad;
    z-index: -1;
  }
  &:hover {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
  &:focus {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
}
</style>