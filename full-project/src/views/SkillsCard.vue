<template>
  <div class="mainBg">
    <my-header></my-header>
    <main>
      <h1 v-if="this.listPage">List of all available skills</h1>
      <div v-if="this.listPage" @click="change" class="bascketImg">
        <img src="../../public/img/imglogo/car-empty.png" alt="bascet img" title="bascet img" />
        <div
          v-if="this.$store.state.choosen.length>0"
          class="SkillsCounter"
        >{{this.$store.state.choosen.length}}</div>
      </div>
      <div class="main" v-if="this.listPage">
        <h2>Hard Skills list :</h2>
        <div class="cols">
          <CardOfSkills v-for="item in this.hardSkills" :key="item.name" :item="item" />
        </div>
        <h2>Soft Skills list</h2>
        <div class="cols">
          <CardOfSkills v-for="item in this.softSkills" :key="item.name" :item="item" />
        </div>
        <div @click="change">
          <main-btn direct="front" btnName="Go to basket"></main-btn>
        </div>
      </div>

      <!-- список Обраних скілів і навиків  -->
      <div v-if="!this.listPage">
        <h1 v-if="!this.$store.state.choosen.length<1">List of all choosen skills</h1>
        <transition appear>
          <div class="container">
            <div
              class="basketListCard"
              v-for="(item, index) in this.$store.state.choosen"
              :key="index"
            >
              <div class="basketListCardImg">
                <img :src="getSrc(item.name)" :alt="item.name" :title="item.name" />
              </div>
              <div class="basketListCardInfo">
                <h4>{{ item.name }}</h4>
                <p>{{ item.plot }}</p>
              </div>
              <img
                class="deleteButton"
                src="../../public/img/imglogo/delete-bttn.png"
                alt="delete button"
                title="delete button"
                @click="deleteFromList(item)"
              />
            </div>
            <h1 v-if="this.$store.state.choosen.length<1">Спочатку оберіть потрібні Вам скіли</h1>
            <div class="bttns">
              <div @click="change">
                <main-btn direct="back" btnName="Back to list"></main-btn>
              </div>
              <router-link v-if="this.$store.state.choosen.length>0" to="/personCard">
                <main-btn btnName="find perfect Worker" direct="front"></main-btn>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </main>
    <MyFooter />
  </div>
</template>


<script>
import skillsArr from "../data.json";
import hardSkills from "../hardSkills.json";
import softSkills from "../softSkills.json";

import MyFooter from "../components/MyFooter.vue";
import MyHeader from "../components/MyHeader.vue";
import CardOfSkills from "../components/CardOfSkills.vue";
import MainBtn from "../components/MainBtn.vue";

export default {
  data: () => {
    return {
      skillsArr,
      hardSkills,
      softSkills,
      //bascket: [],
      listPage: true
    };
  },
  components: {
    MyFooter,
    MyHeader,
    CardOfSkills,
    MainBtn
  },

  computed: {
    choosen: state => state.choosen
  },
  methods: {
    setTobascket: function(val) {
      let choosen = this.$store.state.choosen;
      if (choosen.indexOf(val) < 0) {
        //this.bascket.push(val);
        this.$store.state.choosen.push(val);
      }
    },
    // Функція, що генерує шлях до динамічних картинок
    getSrc: function(name) {
      let newName = name
        .toLowerCase()
        .split(" ")
        .join("");
      return require(`../assets/img/${newName}.jpg`);
    },
    // заміна Списку що відображається. Список Всіх Скілів\ Список Обраних Скілів
    change: function() {
      this.listPage = !this.listPage;
      window.scrollTo(pageXOffset, 0);
    },
    deleteFromList: function(obj) {
      let choosen = this.$store.state.choosen;
      for (let i = 0; i < choosen.length; i++) {
        if (choosen[i].name == obj.name) {
          choosen.splice(i, 1);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$_bgCol: #006eb9;
$_bgColBut: #ffcd24;
$_cardSize: 200px;

// main
.mainBg {
  background-color: #0084ce;
  z-index: -1;
  min-height: 100vh;
  padding-bottom: 4rem;
}
h1 {
  font-family: "Neucha", cursive;
  font-size: 3rem;
  margin: 2rem 0 0 0;
  text-align: center;
}
h2 {
  font-family: "Neucha", cursive;
  font-size: 2.8rem;
  margin: 2rem;
  color: #f47c48;
}

.font-style {
  display: inline-block;
  font-family: "Neucha", cursive;
  font-size: 32px;
  margin: 0;
}

.cols {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
img {
  height: 100%;
  width: 100%;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.bascketImg {
  height: 4rem;
  width: 4rem;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 5%;
  right: 5%;
  cursor: pointer;
  z-index: 1;
}
.SkillsCounter {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 10%;
  right: 5%;
  height: 1.2rem;
  width: 1.2rem;
  color: $_bgColBut;
  background-color: red;
  border-radius: 45%;
  overflow: hidden;
  text-align: center;
  font-size: 0.8rem;
}
.bttns {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0;
}
h4 {
  margin: 0;
  padding: 0;
}
li {
  border: 2px solid black;
  width: 80%;
  height: $_cardSize/2;
}
.basketListCard {
  position: relative;
  display: inline-block;
  min-height: $_cardSize/2;
  width: 100%;
  margin: 5px 0;
  background-color: #6fbae4;
  border-radius: 5px;
  .deleteButton {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    height: 2rem;
    width: 2rem;
    border-radius: 13%;
    &:hover {
      height: 2.3rem;
      width: 2.3rem;
    }
  }

  .basketListCardImg {
    position: absolute;
    top: 0;
    left: 0;
    height: $_cardSize/2;
    width: $_cardSize/2;
    margin: 0;
    padding: 0;
    border-radius: 5px 0 0 5px;
    overflow: hidden;
  }
  .basketListCardInfo {
    position: relative;
    h4 {
      text-align: center;
    }
    p {
      font-family: "Neucha", cursive;
      font-size: 1.3rem;
      text-align: justify;
      margin: 0;
    }
    margin: 0 50px 0 $_cardSize/2 + 50px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>