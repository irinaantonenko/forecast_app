<template>
  <main>
    <div class="authorization">
      <login-popup-item
        v-if="loginSuccessful"
        @closePopup="closeLoginPopup"
      />
      <div class="authorization__container">
          <a class="authorization__logo" href="https://coinfuze.com/">
            <img src="../assets/images/login_logo.png" alt="" width="150">
          </a>
          <div class="authorization__form">
            <ul class="authorization__tab-group">
              <li class="tab" :class="{active : currentIndex == 0}"><span @click="currentIndex = 0">{{ $t('autorization-tab-1') }}</span></li>
              <li class="tab" :class="{active : currentIndex == 1}"><span @click="currentIndex = 1">{{ $t('autorization-tab-2') }}</span></li>
            </ul>
            <div class="authorization__tab-content">
              <div v-show="currentIndex == 0" id="login" class="w-100">
                <form 
                  method="POST" 
                  action="form" 
                  @submit.prevent="login" 
                  @keydown="formLogin.onKeydown($event)"
                >
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      name="login" 
                      v-model="formLogin.login" 
                      :class="{ 'input-filled': formLogin.login !== '' }" 
                      type="text" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-login')"
                    />
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      name="password" 
                      v-model="formLogin.password" 
                      :class="{ 'input-filled': formLogin.password !== '' }" 
                      type="password"
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-password')"
                    />
                  </div>
                  <div class="d-flex additional-actions">
                    <p class="forgot"><span @click="currentIndex = 2">{{ $t('autorization-forgot') }}</span></p>
                  </div>
                  <button type="submit" class="authorization__btn">{{ $t('autorization-btn-login') }}</button>
                </form>
              </div>
              <div v-show="currentIndex == 1" id="signup">
                <form 
                  method="POST" 
                  action="formRegistration" 
                  @submit.prevent="register" 
                  @keydown="formRegistration.onKeydown($event)"
                >
                  <div class="field-wrap">
                    <input 
                      class="authorization__input"
                      :class="{ 'input-filled': formRegistration.name !== '' }"  
                      name="name" 
                      v-model="formRegistration.name" 
                      type="text" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-name')"
                    />
                    <span class="has-error" v-if="!isNameValid">{{ $t('autorization-status-name') }}</span>
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      :class="{ 'input-filled': formRegistration.surname !== '' }"
                      v-model="formRegistration.surname" 
                      type="text" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-surname')"
                    />
                    <span class="has-error" v-if="!isSurnameValid">{{ $t('autorization-status-surname') }}</span>
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      :class="{ 'input-filled': formRegistration.login !== '' }"
                      name="login" 
                      v-model="formRegistration.login" 
                      type="text" required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-login')"
                    />

                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input"
                      :class="{ 'input-filled': formRegistration.password !== '' }" 
                      name="password" 
                      v-model="formRegistration.password" 
                      type="password" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-password')"
                    />
                    <span class="has-error" v-if="!isPasswordValid">{{ $t('autorization-status-password') }}</span>
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      :class="{ 'input-filled': formRegistration.repeatPassword !== '' }"
                      v-model="formRegistration.repeatPassword" 
                      type="password" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-repeat-password')"
                    />
                    <span class="has-error" v-if="!isRepeatPasswordValid">{{ $t('autorization-status-repeat-password') }}</span>
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      :class="{ 'input-filled': formRegistration.email !== '' }"
                      name="email" 
                      v-model="formRegistration.email" 
                      type="email" 
                      required 
                      autocomplete="off" 
                      :placeholder="$t('autorization-email')"
                    />
                    <span class="has-error" v-if="!isEmailValid">{{ $t('autorization-status-email') }}</span>
                  </div>
                  <div class="field-wrap">
                    <vue-tel-input 
                      v-model="formRegistration.phone"  
                      :class="{ 'input-filled': formRegistration.phone !== '' }"                  
                      :dropdown-options="customDropdownOptions"
                      :input-options="customInputOptions"
                      mode="international"
                      autocomplete="off"
                    >
                    </vue-tel-input>
                    <span class="has-error" v-if="!isPhoneValid">{{ $t('autorization-status-phone') }}</span>
                  </div>
                  <div class="field-wrap">
                    <input 
                      class="authorization__input" 
                      :class="{ 'input-filled': formRegistration.invitation !== '' }"
                      v-model="formRegistration.invitation" 
                      type="text" 
                      autocomplete="off" 
                      :placeholder="$t('autorization-promo')"
                    />
                  </div>
                  <div class="field-wrap">
                    <autorization-select
                      :options="this.COUNTRIES"
                      :selected="formRegistration.country"                    
                      @select="selectCountry"
                    />
                  </div>
                  <div class="d-flex additional-actions">
                    <input  type="checkbox" id="agree-rules">
                    <label class="agree-rules" for="agree-rules">
                      {{ $t('autorization-text-1') }} <a href="https://coinfuze.com/privacy-policy" class="authorization__link">{{ $t('autorization-text-2') }}</a>, <a href="https://coinfuze.com/aml" class="authorization__link">{{ $t('autorization-text-3') }}</a>
                    </label>
                    <span class="has-error has-error--agree" v-if="!isAgreeRulesChecked">{{ $t('autorization-status-agree-rules') }}</span>
                  </div>
                  <div class="d-flex additional-actions">
                      <input  type="checkbox" id="agree-age">
                      <label class="agree-age" for="agree-age">
                        {{ $t('autorization-text-4') }}
                      </label>
                      <span class="has-error has-error--agree" v-if="!isAgreeAgeChecked">{{ $t('autorization-status-agree-age') }}</span>
                    </div>
                  <button type="submit" class="authorization__btn">{{ $t('autorization-btn-register') }}</button>
                </form>
              </div>
              <div v-show="currentIndex == 2" id="forgot-password" class="w-100">
                <form @submit.prevent="resetPassword" @keydown="resetForm.onKeydown($event)">
                  <div class="field-wrap">
                    <input class="authorization__input" v-model="resetForm.username" :class="{ 'is-invalid': resetForm.errors.has('username') }"
                      type="text" required autocomplete="off" :placeholder="$t('autorization-login')"/>
                  </div>
                  <span class="has-error" v-if="!statusReset">{{ $t('autorization-status-1') }}</span>
                  <button type="submit" class="authorization__btn">{{ $t('autorization-btn-cancel') }}</button>
                </form>
              </div>
            </div>
          </div>  
          <div class="authorization__lang-item" :class="{ 'open': isOpen }" @click="toggleMenu">
            <div class="authorization__lang authorization__lang-item authorization__link">{{ $i18n.locale }}</div>
            <ul class="authorization__lang-submenu authorization__lang-submenu" v-show="isOpen">
              <span v-if="locale !== 'en'" class="authorization__link" @click="setLocale('en')" :class="{ 'active': locale === 'en' }">EN</span>
              <span v-if="locale !== 'ru'" class="authorization__link" @click="setLocale('ru')" :class="{ 'active': locale === 'ru' }">RU</span>
              <span v-if="locale !== 'tr'" class="authorization__link" @click="setLocale('tr')" :class="{ 'active': locale === 'tr' }">TR</span>
              <span v-if="locale !== 'es'" class="authorization__link" @click="setLocale('es')" :class="{ 'active': locale === 'es' }">ES</span>
              <span v-if="locale !== 'it'" class="authorization__link" @click="setLocale('it')" :class="{ 'active': locale === 'it' }">IT</span>
              <span v-if="locale !== 'de'" class="authorization__link" @click="setLocale('de')" :class="{ 'active': locale === 'de' }">DE</span>
              <span v-if="locale !== 'nl'" class="authorization__link" @click="setLocale('nl')" :class="{ 'active': locale === 'nl' }">NL</span>
            </ul>
          </div>     
      </div>
    </div>
  </main>
</template>

<script>
import Form from 'vform'
import {VueTelInput} from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import AutorizationSelect from "./AutorizationSelect.vue"
import { BASE_API_URL } from '../vuex/index.js';
import LoginPopupItem from './LoginPopupItem.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: "AuthorizationPage",
  layout: "default",
  components: {
    VueTelInput,
    AutorizationSelect,
    LoginPopupItem
  },
  data () {
    return {
      customDropdownOptions: {
        ...VueTelInput.props.dropdownOptions.default(),
        width: '100%',
      },
      customInputOptions: {
        ...VueTelInput.props.inputOptions.default(),        
        showDialCode: true,
      },
      isNameValid: true,
      isSurnameValid: true,
      isPasswordValid: true,
      isRepeatPasswordValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isAgreeRulesChecked: true,
      isAgreeAgeChecked: true,
      currentIndex: 0,
      statusReset: true,
      resetForm: new Form({
        username: '',
      }),
      isOpen: false,
      loginSuccessful: false,
      responseMessage: "",
      locale: '',
      
    }
  },
  computed: {
    ...mapGetters([
      'HEADERS',
      'COUNTRIES',
      'FORM_REGISTRATION',
      'FORM_LOGIN',
      'TOKEN'
    ]),
    formRegistration() {
      return this.FORM_REGISTRATION;
    },
    formLogin() {
      return this.FORM_LOGIN;
    },
  },
  methods: {
    ...mapActions([
      'GET_COUNTRIES',
      'REGISTER_USER',
      'LOGIN_USER',
      'GET_HEADERS',
      'GET_TOKEN'
    ]),
    ...mapMutations(['SET_TOKEN']),
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    appHeight() {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    },
    selectCountry(country) {
      this.formRegistration.country = country.name;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    validateInputs() {
      this.isNameValid = /^[A-Za-z]+$/.test(this.formRegistration.name);
      this.isSurnameValid = /^[A-Za-z]+$/.test(this.formRegistration.surname);
      this.isPasswordValid =
        this.formRegistration.password.length >= 7 &&
        /[A-Z]/.test(this.formRegistration.password) &&
        /\d/.test(this.formRegistration.password);
      this.isRepeatPasswordValid = this.formRegistration.password === this.formRegistration.repeatPassword;
      this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formRegistration.email);
      this.formRegistration.phone = this.formRegistration.phone.replace(/\s/g, '');
      const phonePattern = /^\+?\d{10,15}$/;
      this.isPhoneValid = phonePattern.test(this.formRegistration.phone);
      this.isAgreeRulesChecked = document.getElementById('agree-rules').checked;
      this.isAgreeAgeChecked = document.getElementById('agree-age').checked;
      return (
        this.isNameValid &&
        this.isSurnameValid &&
        this.isPasswordValid &&
        this.isRepeatPasswordValid &&
        this.isEmailValid &&
        this.isPhoneValid &&
        this.isAgreeRulesChecked && 
        this.isAgreeAgeChecked
      );
    },
    async register() {
      const isFormValid = this.validateInputs();
      if (!isFormValid) {
        return;
      }
      this.formRegistration.name = `${this.formRegistration.surname} ${this.formRegistration.name}`;
      const ref = this.$route.query.ref
      this.formRegistration.hasCustomer = this.formRegistration.hasCustomer?.value
      if (ref) {
        this.formRegistration.ref = ref
      }
      let headers = this.HEADERS;
      try {
      const { data } = await this.formRegistration.post(`${BASE_API_URL}ca_registration/`, {headers})
      this.SET_TOKEN(data.rsp);
      const token = data.rsp;
      this.$store.dispatch('GET_TOKEN', token); 
      if (data.status) {
        this.$router.push("/"); 
      }
      } catch (error) {
        this.loginSuccessful = true;
        document.body.classList.add('modal-open');
        console.error(error.response.data);
        const errorMessage = error.response.data[0];
        this.$store.dispatch('GET_ERROR', errorMessage);
      }
    },
    closeLoginPopup() {
      this.loginSuccessful = false;
      document.body.classList.remove('modal-open');
    },
   
    async login() {
      const ref = this.$route.query.ref
      this.formLogin.hasCustomer = this.formLogin.hasCustomer?.value
      if (ref) {
        this.formLogin.ref = ref
      }
      let headers = this.HEADERS;
      try { 
      const { data } = await this.formLogin.post(`${BASE_API_URL}ca_login/`, {headers})
      this.SET_TOKEN(data.rsp);
      const token = data.rsp;
      this.$store.dispatch('GET_TOKEN', token); 
      this.loginSuccessful = true;
      if (data.status) {
        this.$router.push("/"); 
      }
      } catch (error) {
        this.loginSuccessful = true;
        console.error(error.response.data);
        const errorMessage = error.response.data[0];
        this.$store.dispatch('GET_ERROR', errorMessage);
      }
    },
    handleInput(event) {
      const inputField = event.target;
      const inputValue = inputField.value.trim();
      if (inputValue !== "") {
        inputField.classList.add("input-filled");
      } else {
        inputField.classList.remove("input-filled");
      }
    },
    handleOptionClick(event) {
      const countryCode = event.currentTarget.getAttribute('data-country-code');
      const countryInfo = this.$refs.telInput?.findByIso2(countryCode);
      console.log('Clicked country code:', countryCode);
      console.log('Clicked country information:', countryInfo);
    },
  },
  async mounted( ) {  
    await this.GET_COUNTRIES();
    if (this.COUNTRIES) {
      console.log('Data arrived!');
    }
    const inputFields = document.querySelectorAll(".authorization__input");
    inputFields.forEach((inputField) => {
      inputField.addEventListener("input", this.handleInput);
    });
    window.addEventListener('resize', this.appHeight);
    this.appHeight();
    const menuItems = document.querySelectorAll(".authorization__lang-item");
    document.addEventListener("click", (event) => {
      const target = event.target;
      const activeSubmenus = document.querySelectorAll(".authorization__lang-submenu.active");
      activeSubmenus.forEach((activeSubmenu) => {
        if (!target.classList.contains("authorization__lang-item") && !activeSubmenu.contains(target)) {
          activeSubmenu.classList.remove("active");
        }
      });
      menuItems.forEach((menuItem) => {
        const submenu = menuItem.querySelector(".authorization__lang-submenu");
        if (submenu && (menuItem === target || menuItem.contains(target))) {
          submenu.classList.toggle("active");
        } else if (submenu && !menuItem.contains(target)) {
          submenu.classList.remove("active");
        }
      });
    });
  },
  beforeUnmount() {    
    window.removeEventListener('resize', this.appHeight);
  },
}
</script>

<style lang="scss">
.has-error {
  font-size: 12px;
  color: #ff8181;
  display: block;
  position: absolute;
  left: 10px;
  &--agree {
    margin: 0;
    left: 10px;
    bottom: 20px;
    @media (max-width: 1440px) {
      bottom: 5px;
    }
  }
}


.authorization {
  background: $authorization-gradient;
  min-height: var(--app-height);
  height: auto;
  overflow: hidden; 
  &__container {
    padding: 50px 0 100px;
    background-image: url(../assets/images/b2.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 80%;
    min-height: var(--app-height);
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__form {
    width: 490px;
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: center;
    border-radius: 30px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    @media (max-width: 1440px) {
      margin: 50px auto 0;
      width: 470px;
    }
    @media (max-width: 530px) {
      width: 350px;
    }
    @media (max-width: 380px) {
      width: 310px;
    }
  }
  &__tab-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: $authorization-block;
    border-radius: 0 0 30px 30px;    
    @media (max-width: 1440px) {
      padding: 40px;
    }
    @media (max-width: 530px) {
      padding: 20px;
    }
  }
  &__tab-group {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow: hidden;
    border-radius: 30px 30px 0 0;
    & .tab {
      width: 50%;
    }
    & .tab.active {
      background: $dark-color;
      color: $green;
    }
    & li span {
      display: block;
      font-size: 21px;
      font-weight: bold;
      text-decoration: none;
      background: $authorization-block;
      color: $main-text;
      width: 100%;
      text-align: center;
      cursor: pointer;
      transition: .5s ease;
      padding: 15px 0;
      border-bottom: 2px solid $authorization-block;
      @media (max-width: 1440px) {
        font-size: 18px;
      }
    }
    & li span:hover {
      background: $green;
      color: $main-text;
      border-bottom: 2px solid $green;
    }
    & .active span {
      background-color: $dark-color;
      color: $green;
      border-bottom: 2px solid $green;
    }
  }
  &__btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    background: $green;
    color: $dark-color;
    border-radius: 50px;
    transition: all 0.2s ease;
    -webkit-appearance: none;
    border: 1px solid $green;
    cursor: pointer;
    @media (max-width: 1440px) {
      font-size: 14px;
    }
    &:hover, &:focus {
      color: $main-text;
      border: 1px solid $main-text;
    }
  }
  &__input, &__select {
    font-size: 16px;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border: 1px solid $dark-color;
    background-color: $dark-color;
    color: $main-text;
    border-radius: 0;
    padding: 13px 20px;
    border-radius: 30px;
    transition: border-color .25s ease, box-shadow .25s ease;
    box-sizing: border-box;
    height: 46px;
    &:focus, &:hover {
      border: 1px solid $green;
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 174, 0.6);
    }   
  }
  ::placeholder {
    color: $main-text;
    font-size: 16px;
  }
  &__select option {
    color: $main-text;
  }
  &__select {
    &::-webkit-scrollbar {
      width: 5px; 
    }
    &::-webkit-scrollbar-track {
      background-color: darken($main-text, 70%);
      border-radius: 5px;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: $main-text;
      border-radius: 6px;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background-color: darken($main-text, 10%);
    }      
  }
  &__lang-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    position: relative;
  }
  &__lang {
    text-transform: uppercase;
    cursor: pointer;
    width: 25px;
    &:hover {        
      color: $green;
    }
  }
  &__link {
    text-decoration: none;
    color: $main-text;
    cursor: pointer;
    line-height: 2;
    width: auto;
    @media (max-width: 1300px) {
      font-size: 16px;
    }  
    &:hover {
     color: $green;
    }
  }
  &__lang-submenu {
    background-color: $dark-color;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 15px;
    position: absolute;
    top: 100%;
    left: center;
    z-index: 1;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;
    &.active {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s ease-in-out, visibility 0s linear 0s;
    }
  }
}
label:not(.remember-me, .agree-rules, .agree-age) {
  position: absolute;
  transform: translateY(14px);
  left: 13px;
  color: $main-text;
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 14px;
}
label.active {
  transform: translateY(-20px);
  left: 2px;
  font-size: 14px;
}

.field-wrap {
  position: relative;
  margin-bottom: 40px;
  width: 100%;
}
.authorization__lang.authorization__lang-item {
  width: 190px;
  height: 50px;
  background-color: $authorization-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
.authorization__lang-submenu.authorization__lang-submenu {
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
  background-color: $authorization-block;
}
.additional-actions {
  align-items: center;
  padding-bottom: 50px;
  position: relative;
  @media (max-width: 1440px) {
    padding-bottom: 30px;
  }
}

.remember-me, .agree-rules, .agree-age {
  font-size: 14px;
  color: $main-text;
  margin-left: 15px;
}
.forgot:hover {
  opacity: 0.8;
}
.agree-rules {
  width: 90%;
}
.agree-rules a {
  color: $green;
  text-decoration: none;
  transition: all .3s;
}

.agree-rules a:hover {
  color: $green;
  opacity: 0.8;
}

.forgot {
  margin-bottom: 0;
  margin-top: 0;
}

.forgot span {
  font-size: 16px;
  font-weight: bold;
  color: $green;
  text-decoration: none;
  cursor: pointer;
}

input[type="checkbox"] {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  outline: none;
  border: 1px solid #999999;
  cursor: pointer;
}
.vue-tel-input {
  display: flex;
  padding: 0;
  border-radius: 30px;
  border: 1px solid $dark-color;
  height: 46px;
  position: relative;

  & [aria-expanded=true] {
    border-radius: 30px 0 0 30px;
  }
  &:focus-within, &:hover {
    border: 1px solid $green;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 174, 0.6);
  }
}
.vti__input {  
  border-radius: 30px;
  background-color: $dark-color;
  padding: 10px 20px;
  padding-left: 60px;
  color: $main-text;
  height: 44px;
  position: absolute;
  width: 100%;
  border: none;
}
.vti__dropdown {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  padding: 7px;
  background-color: $dark-color;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  &:hover, &.open {
    background-color: transparent;
    width: 100%;
  }
}
.vti__dropdown-list {
  border-color: $green;
  border-radius: 5px;
  left: center;
  width: 100%;
  &::-webkit-scrollbar {
    width: 5px; 
  }
  &::-webkit-scrollbar-track {
    background-color: darken($main-text, 70%);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $main-text;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: darken($main-text, 10%);
  }      
}
[aria-expanded=true]:after {
  display: none;
}
.vti__dropdown-item {
  background-color: $authorization-block;
  color: $main-text;
  &:hover {
    background-color: $dark-color;
  }
  &.highlighted {
    background-color: $dark-color;
  }
}
.vti__selection {
  position: absolute;
  z-index: 6;
}
.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}
.input-filled {
  background-color: $dark-color;
}
</style>
