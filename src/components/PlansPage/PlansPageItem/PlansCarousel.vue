<template>
  <div>
    <div class="popup__wrapper" ref="popup_wrapper" v-if="isInfoPopupVisible">
      <div class="popup" id="myModal">
        <div class="popup__header">
          <h3 class="popup__title">Активировать инвестиционний план?</h3>
          <span class="icon-close popup__icon" @click="closeInfoPopup"></span>
        </div>
        <div class="popup__content">
          <button class="popup__btn btn" @click="activateItem(activeTabIndex)">Да</button>
          <button class="popup__btn btn" @click="closeInfoPopup">Нет</button>
        </div>
      </div>
    </div>
    <div class="carousel-active" v-if="activeItems.length">
      <div class="carousel__header">
        <h2 class="carousel__title">Активные планы</h2>
        <div class="carousel__btns">
          <button
            class="carousel__button carousel__button--prev"
            @click="scrollCarouselActive(-1)"
            :disabled="activeCurrentIndex === 0"
          >
            <span class="carousel__arrow icon-circle-left"></span>
          </button>
          <button
            class="carousel__button carousel__button--next"
            @click="scrollCarouselActive(1)"
            :disabled="activeCurrentIndex === activeItems.length - itemsToShow"
          >
            <span class="carousel__arrow icon-circle-right"></span>
          </button>
        </div>
      </div>
      <div class="carousel">
        <div class="carousel__wrapper">
          <ul class="carousel__list" :style="{ transform: `translateX(${activeTranslateX}px)` }">
            <li
              class="carousel__item"
              v-for="(item, index) in activeItems"
              :key="index"
              :class="{ 'active': index === activeTabIndex }"
              @click="changeTab(index)"
            >
              <div class="carousel__item-wrapper active">
                <div class="carousel__image-wrap">
                  <h3 class="carousel__item-header"><img src="../../../assets/images/plan.png" width="20" alt="icon">{{ item.name }}</h3>
                  <img class="carousel__image" :src="require(`@/assets/images/${item.image_2}`)" alt="img" />
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Дата начала</p>
                  <p class="carousel__text">{{ item.startdate }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Дата окончания</p>
                  <p class="carousel__text">{{ item.enddate }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Стартовый капитал</p>
                  <p class="carousel__text">{{ startCapital[index] }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Добавленный капитал</p>
                  <p class="carousel__text">{{ item.addedcapital }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Финансовый результат в %</p>
                  <p class="carousel__text">{{ item.finresult }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Прибыль в usdt</p>
                  <p class="carousel__text">{{ item.profit }}</p>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Статус плана</p>
                  <span class="carousel__icon-check icon-check-circle"></span>
                </div>
                <div class="carousel__text-wrap">
                  <p class="carousel__text">Реинвестировать</p>
                  <input type="checkbox" id="myCheckbox" checked />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="carousel-access">
      <div class="carousel__header">
        <h2 class="carousel__title">Доступные планы</h2>
        <div class="carousel__btns">
          <button
            class="carousel__button carousel__button--prev"
            @click="scrollCarousel(-1)"
            :disabled="currentIndex === 0"
          >
            <span class="carousel__arrow icon-circle-left"></span>
          </button>
          <button
            class="carousel__button carousel__button--next"
            @click="scrollCarousel(1)"
            :disabled="currentIndex === carouselItems.length - itemsToShow"
          >
            <span class="carousel__arrow icon-circle-right"></span>
          </button>
        </div>
      </div>
      <div class="carousel">
        <div class="carousel__wrapper">
          <ul class="carousel__list" :style="{ transform: `translateX(${translateX}px)` }">
            <li
              class="carousel__item"
              v-for="(item, index) in carouselItems"
              :key="index"
              :class="{ 'active': index === activeTabIndex }"
              @click="changeTab(index)"
            >
              <div class="card">
                <div class="carousel__item-wrapper front">
                  <div class="carousel__image-wrap">
                    <h3 class="carousel__item-header"><img src="../../../assets/images/plan.png" width="20" alt="icon">{{ item.name }}</h3>
                    <img class="carousel__image" :src="require(`@/assets/images/${item.image}`)" alt="img" />
                  </div>
                  <div class="carousel__content">
                    <span class="carousel__icon-plus icon-plus-alt" @click="mergeItems(index)"></span>
                    <div class="carousel__text-wrap">
                      <p class="carousel__text">Мин.инвестиции</p>
                      <div class="carousel__text">
                        <img class="deposit__finance-img" src="../../../assets/images/tether.png" alt="ustd" />
                        <span>USDT 100</span>
                      </div>
                    </div>
                    <div class="carousel__text-wrap">
                      <p class="carousel__text">Срок</p>
                      <p class="carousel__text">{{ item.month }}</p>
                    </div>
                    <div class="carousel__text-wrap">
                      <p class="carousel__text">Доходность</p>
                      <p class="carousel__text">до {{ item.income }}</p>
                    </div>
                    <div class="carousel__text-wrap">
                      <p class="carousel__text">Коммисия от прибыли</p>
                      <p class="carousel__text">{{ item.percent }}</p>
                    </div>
                  </div>
                </div>
                <div class="carousel__item-wrapper back">
                  <span class="carousel__icon-close icon-circle-with-cross" @click="backItems(index)"></span>
                  <div class="carousel__image-wrap">
                    <h3 class="carousel__item-header"><img src="../../../assets/images/plan.png" width="20" alt="icon">{{ item.name }}</h3>
                    <img class="carousel__image" :src="require(`@/assets/images/${item.image_2}`)" alt="img" />
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Дата начала</p>
                    <p class="carousel__text">{{ item.startdate }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Дата окончания</p>
                    <p class="carousel__text">{{ item.enddate }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Стартовый капитал</p>
                    <p class="carousel__text">{{ item.startcapital }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Добавленный капитал</p>
                    <p class="carousel__text">{{ item.addedcapital }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Финансовый результат в %</p>
                    <p class="carousel__text">{{ item.finresult }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Прибыль в usdt</p>
                    <p class="carousel__text">{{ item.profit }}</p>
                  </div>
                  <div class="carousel__text-wrap">
                    <p class="carousel__text">Статус плана</p>
                    <span v-if="statusPlan" class="carousel__icon-cross icon-circle-with-cross"></span>
                    <span v-else class="carousel__icon-check icon-check-circle"></span>
                  </div>
                  <p class="carousel__text carousel__text-special">Введите сумму стартового капитала:</p>
                  <div class="carousel__input-wrap">
                    <input
                      class="carousel__input"
                      type="number"
                      placeholder="0.00"
                      v-model="startCapital[index]"
                      :class="{ 'error': !isValidStartCapital(startCapital[index]) }"
                      required
                    />
                    <button class="carousel__btn btn" @click="showPopupInfo()" :disabled="!isValidStartCapital(startCapital[index])">
                      Активировать
                    </button>
                    <div v-if="!isValidStartCapital(startCapital[index])" class="carousel__error-message">
                      Введите минимальную сумму
                    </div>
                  </div>
                  <div class="carousel__text carousel__footer">
                    *Особенности наших инвестиционных стратегий ограничивают доинвестирование средств в план, если до окончания
                    осталось менее 15 дней
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlansCarousel',
  components: {},
  data() {
    return {
      carouselItems: [
        {
          name: 'Инвестиционный план 1',
          image: 'p1.png',
          image_2: 'p1_1.png',
          month: '2 месяца',
          income: '16%',
          percent: '35%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#007977'
        },
        {
          name: 'Инвестиционный план 2',
          image: 'p2.png',
          image_2: 'p2_2.png',
          month: '4 месяца',
          income: '32%',
          percent: '35%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#905b83'
        },
        {
          name: 'Инвестиционный план 3',
          image: 'p3.png',
          image_2: 'p3_3.png',
          month: '6 месяцев',
          income: '48%',
          percent: '25%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#a9282b'
        },
        {
          name: 'Инвестиционный план 4',
          image: 'p4.png',
          image_2: 'p4_4.png',
          month: '8 месяцев',
          income: '64%',
          percent: '25%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#b17763'
        },
        {
          name: 'Инвестиционный план 5',
          image: 'p5.png',
          image_2: 'p5_5.png',
          month: '10 месяцев',
          income: '80%',
          percent: '20%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#125e8a'
        },
        {
          name: 'Инвестиционный план 6',
          image: 'p6.png',
          image_2: 'p6_6.png',
          month: '12 месяцев',
          income: '96%',
          percent: '20%',
          showInfo: true,
          startdate: '2023.03.28',
          enddate: '2023.04.29',
          startcapital: '300',
          addedcapital: '27,07',
          finresult: '60',
          profit: '600',
          color: '#5a1e61'
        }
      ],
      activeItems: [],
      translateX: 0,
      activeTranslateX: 0,
      currentIndex: 0,
      activeCurrentIndex: 0,
      itemWidth: 0,
      activeTabIndex: 0,
      itemsToShow: 3,
      startCapital: [],
      showError: false,
      gap: 20,
      statusPlan: true,
      isInfoPopupVisible: false,
      popupTop: 0,
      popupLeft: 0
    };
  },
  mounted() {
    this.calculateItemWidth();
    window.addEventListener('resize', this.calculateItemWidth);
    let vm = this;
    document.addEventListener('click', function (event) {
      if (event.target === vm.$refs['popup_wrapper']) {
        vm.closeInfoPopup();
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateItemWidth);
  },
  methods: {
    calculateItemWidth() {
      const carouselWrapper = document.querySelector('.carousel__wrapper');
      if (carouselWrapper) {
        if (window.innerWidth <= 600) {
          this.itemWidth = carouselWrapper.offsetWidth / 1;
          this.itemsToShow = 1;
        } else if (window.innerWidth <= 900) {
          this.itemWidth = carouselWrapper.offsetWidth / 2;
          this.itemsToShow = 2;
        } else {
          this.itemWidth = carouselWrapper.offsetWidth / 3;
          this.itemsToShow = 3;
        }
      }
    },
    scrollCarousel(direction) {
      const newIndex = this.currentIndex + direction;
      if (newIndex >= 0 && newIndex <= this.carouselItems.length - this.itemsToShow) {
        this.currentIndex = newIndex;
        this.translateX = -this.itemWidth * this.currentIndex;
      }
    },
    scrollCarouselActive(direction) {
      const newIndex = this.activeCurrentIndex + direction;
      if (newIndex >= 0 && newIndex <= this.activeItems.length - this.itemsToShow) {
        this.activeCurrentIndex = newIndex;
        this.activeTranslateX = -this.itemWidth * this.activeCurrentIndex;
      }
    },
    changeTab(index) {
      this.activeTabIndex = index;
    },
    mergeItems(index) {
      this.carouselItems[index].showInfo = false;
      const frontElement = document.querySelectorAll('.carousel__item-wrapper.front')[index];
      const backElement = document.querySelectorAll('.carousel__item-wrapper.back')[index];
      frontElement.classList.add('rotate');
      backElement.classList.add('rotate');
    },
    backItems(index) {
      this.carouselItems[index].showInfo = true;
      const frontElement = document.querySelectorAll('.carousel__item-wrapper.front')[index];
      const backElement = document.querySelectorAll('.carousel__item-wrapper.back')[index];
      frontElement.classList.remove('rotate');
      backElement.classList.remove('rotate');
    },
    isValidStartCapital(value) {
      return value !== '' && value >= 100;
    },
    activateItem(index) {
      this.activeItems.push(this.carouselItems[index]);
      this.closeInfoPopup();
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
      document.body.classList.add('modal-open');
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
      document.body.classList.remove('modal-open');
    },
    openPopup(event) {
      this.popupTop = event.clientY + 'px';
      this.popupLeft = event.clientX + 'px';
      document.body.classList.add('modal-open');
    }
  }
};
</script>

  
<style lang="scss">
.carousel {
  overflow: hidden;
  &__header {
    color: $main-text;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 20px;
    position: relative;
  }
  &__title {
    font-size: 24px;
    @media (max-width: 1800px) {
      font-size: 22px;
    }
    @media (max-width: 1600px) {
      font-size: 20px;
    }
    @media (max-width: 1450px) {
      font-size: 18px;
    }
    @media (max-width: 1280px) {
      font-size: 16px;
    }
  }
  &__arrow {
    font-size: 20px;
  }
  &__wrapper {
    width: 100%;
    overflow: hidden;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      scroll-snap-type: x mandatory;
      overflow-x: scroll;
      scroll-behavior: smooth;
    }     
  }
  &__list {
    display: flex;
    transition: transform 0.3s ease-in-out;
    margin: 0;
    list-style: none;
    padding: 0; 
  }
  &__item {
    flex: 0 0 calc((100%)  / 3);
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    @media (max-width: 900px) {
      flex: 0 0 calc(100% / 2);
    }
    @media (max-width: 600px) {
      flex: 0 0 100%;
    }
  }
  &__item-wrapper {
    background-color: $plans-bg;
    border: 1px solid $special-text;      
    border-radius: 15px;
    padding: 30px 15px;
    width: 90%;
    height: 100%;
    min-height: 580px;
    @media (min-width: 2000px) {
      min-height: 650px;
    }
    @media (min-width: 2400px) {
      min-height: 700px;
    }
    @media (max-width: 1800px) {
      min-height: 560px;
    }
    @media (max-width: 1600px) {
      min-height: 470px;
    }
    @media (max-width: 1450px) {
      min-height: 420px;
    }
    @media (max-width: 1280px) {
      min-height: 370px;
      padding: 15px;
    }
    @media (max-width: 1270px) {
      min-height: 400px;
    }
    @media (max-width: 1024px) {
      min-height: 380px;
    }
    @media (max-width: 900px) {
      min-height: 400px;
    }
    @media (max-width: 600px) {
      min-height: 450px;
    }
    @media (max-width: 500px) {
      min-height: 420px;
    }
    @media (max-width: 425px) {
      min-height: 390px;
    }
    @media (max-width: 390px) {
      min-height: 370px;
    }
    &.back {
      background-color: $item-bg;
      position: relative;
      & .carousel__text-wrap {
        color: $dark-color;
      }
      & .carousel__text-wrap:not(:last-child) {
        border-bottom: 1px solid $dark-color;
      }
    }
    &.active  {
      min-height: auto;
      background-color: $item-bg;
      padding-bottom: 30px;
      & .carousel__text-wrap {
        color: $dark-color;
      }
      & .carousel__text-wrap:not(:last-child) {
        border-bottom: 1px solid $dark-color;
      }
    }
  }
  &__item-header {
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $main-text;
    background-color: $shadow-popup;
    padding: 10px 0;
    gap: 10px;
    font-size: 20px;
    @media (max-width: 1800px) {
      font-size: 18px;
    }
    @media (max-width: 1600px) {
      font-size: 16px;
    }
    @media (max-width: 1450px) {
      font-size: 14px;
    } 
  }
  &__image-wrap {
    width: 98%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1280px) {
      width: 94%;
    }
  }
  &__image {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  &__btns {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &__button {
    border: none;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    color: $special-text;
    &:hover {
      color: $green;
    }
  }
  &__button--prev[disabled],
  &__button--next[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  &__content {
    width: 100%;
    padding-top: 50px;
    position: relative;
    @media (max-width: 1280px) {
      padding-top: 30px;
    }
  }
  &__text-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $main-text;
    padding: 10px 0;
    @media (max-width: 1600px) {
      padding: 5px 0;
    }
  }
  &__text-wrap:not(:last-child) {
    border-bottom: 1px solid $special-text;
  }
  &__text {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &__icon-plus {
    position: absolute;
    top: -24px;
    left: calc(50% - 20px);
    font-size: 40px;
    color: $green;
    cursor: pointer;
    background-color: $main-text;
    border-radius: 50%;
    &:hover {
      opacity: 0.9;
    }
  }
  &__icon-close {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 5px;
    font-size: 30px;
    color: $inactive;
    z-index: 5;
    border-radius: 50%;
    background: $main-text;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: 1280px) {
      font-size: 20px;
      top: 5px;
      right: 15px;
    }
  }
  &__icon-cross {
    font-size: 20px;
    color: $inactive;
    @media (max-width: 1800px) {
      font-size: 18px;
    }
    @media (max-width: 1450px) {
      font-size: 16px;
    }
  }
  &__icon-check {
    color: $green;
    font-size: 20px;
    @media (max-width: 1800px) {
      font-size: 18px;
    }
    @media (max-width: 1450px) {
      font-size: 16px;
    }
  }
  &__input-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: relative;
  }
  &__input {
    padding: 10px 20px;
    margin: 0;
    border-radius: 30px;
    border: 1px solid $dark-color;
    outline: none;
    color: $dark-color;
    font-size: 10px;
    width: 60%;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    &:focus-within, &:hover {
      border: 1px solid $green;
      outline: 0;
    }
    &.error {
      border-color: $inactive;
    }
    @media (min-width: 1450px) {
      font-size: 12px;
    }
    @media (max-width: 1280px) {
      padding: 5px 10px;
    }
  }
  &__text-special {
    padding: 10px 0;
  }
  &__btn.btn {
    margin: 0;
    padding: 10px 20px;
    width: 40%;
    max-width: 140px;
    @media (max-width: 1280px) {
      padding: 5px 10px;
    }
  }
  &__footer {
    visibility: hidden;
    height: 0;
  }
  &__error-message {
    color: $inactive;
    font-size: 10px;
    position: absolute;
    bottom: -15px;
    left: 10px;
  }
}
input[type="checkbox"] {
  width: 17px;
  height: 17px;
  cursor: pointer;
  @media (max-width: 1800px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 1450px) {
    width: 13px;
    height: 13px;
  }
}

//animation to rotate card
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  transform-style: preserve-3d;
  .front.rotate {
    transform: rotateY(-180deg);
  }
  .back.rotate {
    transform: rotateY(0);
  }
}
.front {
  transform: rotateY(0); 
}
.back {
  transform: rotateY(180deg); 
}
.front, .back {
  position: absolute;
  backface-visibility: hidden;
  transition: transform .5s ease;
  -webkit-backface-visibility: hidden;
} 
//popup
.popup {
  padding: 30px;
  position: fixed;
  width: 430px;
  box-shadow: 0 0 16px 0 $shadow-popup;
  z-index: 1000;
  background-color: $plans-bg;
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
    color: $main-text;
    text-align: center;
    padding-bottom: 45px;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  &__icon {
    color: $main-text;
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
  &__btn.btn {
    min-width: 120px;
    margin: 0;
  }
}
.modal-open {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}  
</style>
  