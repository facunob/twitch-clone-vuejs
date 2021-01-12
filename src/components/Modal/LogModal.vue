<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div
        class="modal-container"
        :style="{ background: colorBg, color: txtColor }"
      >
        <div class="btn" @click="closeModal">
          X
        </div>
        <div class="modal-header">
          <i class="fab fa-twitch"></i> Iniciar sesión en Twitch
        </div>
        <form action="">
          <label for="username">Nombre de usuario</label>
          <input type="text" placeholder="Usuario" name="username" />

          <label for="password">Contraseña</label>
          <input type="text" name="password" placeholder="Contraseña" />

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogModal",
  data() {
    return {
      colorBg: "#18181b",
      txtColor: "white",
    };
  },
  methods: {
    closeModal() {
      return this.$store.commit("SET_BOOLEAN", {
        name: "logModal",
        value: false,
      });
    },
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  watch: {
    darkTheme() {
      if (this.colorBg === "#18181b") {
        this.colorBg = "white";
      } else if (this.colorBg === "white") {
        this.colorBg = "#18181b";
      }
      if (this.txtColor === "white") {
        this.txtColor = "black";
      } else {
        this.txtColor = "white";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reg-modal {
  z-index: 1000;
  position: absolute;
  left: 35vw;
  top: 20vh;
  width: 30%;
  height: 80%;
  background: #9146ff;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}
.modal-header {
  font-size: 28px;
}
.modal-header > i {
  color: #9146ff;
}
.btn {
  text-align: center;
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 7px;
  top: 7px;
}
.btn:hover {
  background: gray;
}

label {
  display: block;
  margin: 7px;
}
input {
  width: 100%;
  height: 27px;
  border: none;
  outline: none;
  border-radius: 7px;
  padding-left: 10px;
}
button {
  margin-top: 20px;
  width: 100%;
  height: 27px;
}
</style>
