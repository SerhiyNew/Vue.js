<template>
  <div>
    <a v-if="direct=='front'" class="mainBtn">
      <span class="txt">{{btnName}}</span>
      <span class="round">
        <i>></i>
      </span>
    </a>
    <a v-else class="mainBtnBack">
      <span class="txt">{{btnName}}</span>
      <span class="round">
        <i>&lt;</i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "MainBtn",
  data: function() {
    return {};
  },
  props: {
    btnName: String,
    direct: String
  },
  methods: {
    change: function() {
      this.listPage = !this.listPage;
    }
  }
};
</script>

<style lang="scss" scoped>
.mainBtn {
  cursor: pointer;
  background-color: #f27935;
  text-decoration: none;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  padding: 13px 53px 13px 23px;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: inline-block;
  span {
    position: relative;
    z-index: 3;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 1px 0;
    i {
      padding-left: 12px;
    }
  }
  .txt {
    font-size: 14px;
    line-height: 1.45;
  }
  .round {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    position: absolute;
    right: 3px;
    top: 3px;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    z-index: 2;
    background-color: #f59965;
    font-size: 2.2rem;
  }
}

.mainBtn:hover {
  padding-left: 48px;
  padding-right: 28px;
}
.mainBtn:hover .round {
  width: calc(100% - 6px);
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  text-align: left;
}

// BACK BUTTON
.mainBtnBack {
  cursor: pointer;
  background-color: #11c21f;
  text-decoration: none;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  padding: 13px 23px 13px 53px;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  display: flex;
  flex-direction: row-reverse;
  span {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 0;
  }
  .txt {
    // align-self: center;
    font-size: 14px;
    line-height: 1.45;
  }
  .round {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    position: absolute;
    left: 3px;
    top: 3px;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    z-index: 2;
    background-color: #6fc977;
    font-size: 2.2rem;
  }
}

.mainBtnBack:hover {
  padding-right: 48px;
  padding-left: 28px;
}
.mainBtnBack:hover .round {
  width: calc(100% - 6px);
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  right: 3px;
  top: 3px;
  display: flex;
  flex-direction: row-reverse;
  i {
    position: absolute;
    right: 10%;
  }
}
</style>