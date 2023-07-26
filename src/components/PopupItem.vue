<template>
    <div class="popup__wrapper" ref="popup_wrapper">
        <div class="popup" id="myModal">            
            <div class="popup__header">
                <h3 class="popup__title">Активировать инвестиционный план?</h3>
                <span class="icon-close popup__icon" @click="closePopup"></span>
            </div>
            <div class="popup__content">
                <button @click="activateItem(index)">Да</button>
                <button @click="closePopup">Нет</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PopupItem',
  data() {
    return {
      popupTop: 0,
      popupLeft: 0,
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    activateItem(index) {
      this.$emit('activateItem', index);
    },
    openPopup(event) {
      this.popupTop = event.clientY + 'px';
      this.popupLeft = event.clientX + 'px';
      document.body.classList.add('modal-open');
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (event) {
      if (event.target === vm.$refs['popup_wrapper']) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
   .popup {
        padding: 60px 30px 30px;
        position: fixed;
        width: 545px;
        box-shadow: 0 0 16px 0 $shadow-popup;
        z-index: 1000;
        background-color: $green;
        border-radius: 10px;
        @media (max-width: 700px) {
            width: 90%;
        }
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $shadow-popup;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 1433;
            height: 100%;
            width: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            transition: opacity .15s linear;
        }
        &__header {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__title {
            font-size: 17px;
            color: #ffffff;
            text-align: center;
            padding-bottom: 45px;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            & .login-form__input {
                width: 440px;
                @media (max-width: 700px) {
                    width: 100%;
                }
            }
        }
        &__icon {
            color: #fff;
            cursor: pointer;
            position: absolute;
            z-index: 1111;
            font-size: 17px;
            top: 15px;
            right: 15px;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .modal-open {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }    
</style>