<template>
  <main>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3 name="header">Välkommen till AirBean-familjen!</h3>
            </div>
            <div class="modal-body">
              <slot
                name="body"
              >Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</slot>
            </div>
            <div class="modal-footer">
              <form>
                <label for="name">Namn</label>
                <input type="text" id="name" v-model="user.name" placeholder="Förnamn Efternamn" />

                <label for="email">E-post</label>
                <input type="text" v-model="user.email" placeholder="e-post@snabelapunkt.com" id="email" />

                <span>
                  <input
                    class="consentgdpr"
                    type="radio"
                    id="consent"
                    v-model="user.consent"
                    value="true"
                  />
                  <label class="consentgdpr" for="consent">GDPR OK</label>
                </span>

                <button class="modal-default-button" @click="submitUser()">Brew me a cup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>
<script>
export default {
  name: "RegisterModal",
  data() {
    return {
      user: {
        name: "",
        email: "",
        consent: false
      }
    };
  },

  computed: {},

  methods: {
    submitUser() {
      this.$store.dispatch("createUser", this.user);
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
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
  font-family: "Work Sans", sans-serif;
  color: #2f2926;
  font-size: 0.8rem;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #f3e4e1;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  font-family: "PT Serif", serif;
  color: #2f2926;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-footer {
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    input {
      line-height: 2rem;
    }
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0.5;
}

.modal-leave-active {
  opacity: 0.5;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>