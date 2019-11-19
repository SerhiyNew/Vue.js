<template>
  <div class="mainBg">
    <my-header></my-header>
    <main>
      <div
        v-for="prsn in personInfo.slice(0, this.count)"
        :key="prsn.name"
        class="personCardActive"
      >
        <div class="personFoto">
          <img :src="getSrcFoto(prsn.name)" alt="person foto" title="person foto" />
        </div>
        <div class="personInfo">
          <div class="mainInfo">
            <span>
              <b>{{ prsn.secName + " " }}</b>
            </span>
            <span>
              <b>{{ prsn.name + ", " }}</b>
            </span>
            <span>{{ prsn.age }} age old</span>
          </div>
          <br />
          <div class="otherInfo">
            <span>{{ prsn.info}}</span>
            <div class="otherInfoText">
              <br />
              <template v-if="choosenSkills(prsn).length>0">
                <span>As you wish, this Person have :</span>
                <div class="chip blue" v-for="item in choosenSkills(prsn)" :key="item.name">{{item}}</div>
                <span>skills.</span>
                <br />
              </template>
              <template v-else>
                <span>This Person does not have your choosen skills, but</span>
                <br />
              </template>
              <template v-if="unChoosenSkills(prsn).length>0">
                <span>Additional have :</span>
                <div
                  class="chip green"
                  v-for="item in unChoosenSkills(prsn)"
                  :key="item.name"
                >{{item}}</div>
                <span>skills.</span>
              </template>
            </div>
          </div>
          <div class="contactPerson">
            <div v-for="(contact,index) in prsn.contacts" :key="index">
              <a v-if="contact" :href="contact">
                <img
                  :src="getContactSrc(contact, index)"
                  :alt="`${contact}-link`"
                  class="rounded-circle border border-primary"
                  :title="`${contact}-link`"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span @click="plusPerson">
        <NextFiveBttn
          v-if="this.count<this.personInfo.length"
          btnName="Show me another five Person"
        ></NextFiveBttn>
      </span>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import personInfo from "../personinfo.json";
import MyFooter from "../components/MyFooter.vue";
import MyHeader from "../components/MyHeader.vue";
import NextFiveBttn from "../components/NextFiveBttn.vue";

export default {
  data: () => {
    return {
      personInfo,
      count: 3
    };
  },
  components: {
    MyFooter,
    MyHeader,
    NextFiveBttn
  },

  methods: {
    plusPerson: function() {
      return (this.count += 5);
    },
    getSrcFoto: function(name) {
      return require(`../../public/img/imgFoto/${name}.jpg`);
    },
    getContactSrc: function(value, name) {
      let newName = name
        .toLowerCase()
        .split(" ")
        .join("");
      if (value) {
        return require(`../../public/img/social-service-img/${newName}_logo.jpg`);
      } else {
        return require(`../../public/img/social-service-img/${newName}_logo_disabled.jpg`);
        // facebook_logo_disabled.jpg
      }
    },
    choosenSkills: function(item) {
      let arr = [];
      let choosen = this.$store.state.choosen;

      for (let i = 0; i < choosen.length; i++) {
        if (item.skills[choosen[i].name]) {
          arr.push(choosen[i].name);
        }
      }
      return arr;
    },
    unChoosenSkills: function(item) {
      let arr = [];
      let choosen = this.$store.state.choosen;
      //запушим ВСІ скіли ДАНОГО персонажа в масив
      for (let key in item.skills) {
        arr.push(key);
      }
      //знайдемо серед скілів ОБРАНІ і видалим їх із массива
      for (let i = 0; i < choosen.length; i++) {
        if (arr.indexOf(choosen[i].name) >= 0) {
          let index = arr.indexOf(choosen[i].name);
          arr.splice(index, 1);
        }
      }
      return arr;
    }
  },
  created: function() {
    // Оцінювання навиків всіх персонажів, відносно обраних навиків
    let choosen = this.$store.state.choosen;
    for (let i = 0; i < choosen.length; i++) {
      let skill = choosen[i].name;

      for (let j = 0; j < personInfo.length; j++) {
        if (personInfo[j].skills[skill]) {
          personInfo[j].value += 1;
        }
      }
    }
    // сортування списку по найбільшій цінності
    personInfo.sort(function(a, b) {
      return b.value - a.value;
    });
  },
  computed: {
    choosen: state => state.choosen.state
  }
};
</script>

<style lang="scss" scoped>
$_cardSize: 200px;

.mainBg {
  background-color: #3197d3;
  z-index: -1;
  min-height: 100vh;
}
.chip {
  margin-left: 5px;
}
main {
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    align-self: center;
    margin-bottom: 2rem;
  }
}

.personCardActive {
  position: relative;
  display: flex;
  margin: 3em;
  box-shadow: 0 10px 30px grey;
  border-radius: 0 10px 10px 10px;
  background-color: #93bfd8;

  .personFoto img {
    height: $_cardSize * 1.3;
    width: $_cardSize * 1.3;
    flex-grow: 0;
    border-radius: 0 40% 40% 40%;
  }
  .personInfo {
    margin: 1em;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .mainInfo span {
      font-family: "Neucha", cursive;
      font-size: 1.5rem;
    }
    span {
      font-family: "Neucha", cursive;
      font-size: 1.3rem;
    }

    .contactPerson {
      display: flex;
      align-self: center;
      justify-content: space-around;
      width: 100%;
      margin: 1em;
      div {
        overflow: hidden;
        border-radius: 50%;
        height: $_cardSize/7;
        width: $_cardSize/7;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
._bbtn {
  margin: 8rem;
}
</style>