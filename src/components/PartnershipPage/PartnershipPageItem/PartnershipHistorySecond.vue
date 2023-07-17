<template>
  <div class="partnership-history">
    <h3 class="partnership-history__subtitle">Уровень 2 – комиссия от депозита и от прибыли 2%</h3>
    <div class="partnership-history__wrap">
      <div class="partnership-history__table">
        <div class="partnership-history__item-title">
          <p class="partnership-history__text partnership-history__col">День регистрации</p>
          <p class="partnership-history__text partnership-history__col">Имя пользователя</p>
          <p class="partnership-history__text partnership-history__col">К-ство партнеров</p>
          <p class="partnership-history__text partnership-history__col">Сумма депозитов</p>
          <p class="partnership-history__text partnership-history__col">Сумма прибыли</p>
          <p class="partnership-history__text partnership-history__col">Ваш доход</p>
        </div>
        <div class="partnership-history__item" v-for="(item, index) in displayedItems" :key="index">
          <p class="partnership-history__text partnership-history__col">{{ item.startdate }}</p>
          <p class="partnership-history__text partnership-history__col">{{ item.name }}</p>
          <p class="partnership-history__text partnership-history__col">{{ item.number }}</p>
          <p class="partnership-history__text partnership-history__col">{{ item.deposit }}</p>
          <p class="partnership-history__text partnership-history__col">{{ item.finresult }}</p>
          <p class="partnership-history__text partnership-history__col">{{ item.profit }}</p>
        </div>
      </div>
    </div>
    <div class="partnership-history__item-footer">
      <div class="partnership-history__dropdown-wrap">
        <div class="partnership-history__dropdown">
          <button class="partnership-history__dropbtn">{{ itemsPerPage }} <span class="icon-arrow_drop_down1"></span></button>
          <div class="partnership-history__dropdown-content">
            <a @click="updateItemsPerPage(5)">5</a>
            <a @click="updateItemsPerPage(10)">10</a>
            <a @click="updateItemsPerPage(15)">15</a>
          </div>          
        </div>
        <div v-if="displayedItems.length > 0">Показано {{ endItemIndex }} из {{ items.length }}</div>
      </div>
      <div class="partnership-history__page-btns">
        <button class="partnership-history__page-btn" @click="previousPage" :disabled="currentPage === 1"><span class="partnership-history__arrow icon-keyboard_arrow_left"></span></button> 
        <button class="partnership-history__page-btn" @click="goToPage(currentPage)" :class="{ active: true }">{{ currentPage }}</button>
        <button class="partnership-history__page-btn" @click="nextPage" :disabled="currentPage === totalPages"><span class="partnership-history__arrow icon-keyboard_arrow_right"></span></button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'PartnershipHistorySecond',
  data() {
    return {
      items: [
        { startdate: '2023.05.28', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Виктория' },
        { startdate: '2023.05.27', deposit: 30.00, finresult: 60, profit: 600, number: 2, name: 'Игорь' },
        { startdate: '2023.05.26', deposit: 30.00, finresult: 60, profit: 600, number: 3, name: 'Влад' },
        { startdate: '2023.05.25', deposit: 30.00, finresult: 60, profit: 600, number: 4, name: 'Сергей' },
        { startdate: '2023.05.23', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Дмитрий' },
        { startdate: '2023.05.23', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Виктория' },
        { startdate: '2023.05.23', deposit: 30.00, finresult: 60, profit: 600, number: 3, name: 'Павел' },
        { startdate: '2023.05.23', deposit: 30.00, finresult: 60, profit: 600, number: 6, name: 'Виктория' },
        { startdate: '2023.05.19', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Виктория' },
        { startdate: '2023.05.18', deposit: 30.00, finresult: 60, profit: 600, number: 7, name: 'Виктория' },
        { startdate: '2023.05.17', deposit: 30.00, finresult: 60, profit: 600, number: 2, name: 'Виктория' },
        { startdate: '2023.05.15', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Виктория' },
        { startdate: '2023.05.13', deposit: 30.00, finresult: 60, profit: 600, number: 6, name: 'Виктория' },
        { startdate: '2023.05.11', deposit: 30.00, finresult: 60, profit: 600, number: 1, name: 'Виктория' },
        { startdate: '2023.05.10', deposit: 30.00, finresult: 60, profit: 600, number: 8, name: 'Виктория' },
      ],
      displayedItems: [],
      itemsPerPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    startItemIndex() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItemIndex() {
      return Math.min(this.currentPage * this.itemsPerPage, this.items.length);
    },
  },
  mounted() {
    this.showItems();
  },
  methods: {
    showItems(itemsPerPage) {
      if (itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
      }
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displayedItems = this.items.slice(startIndex, endIndex);
    },
    updateItemsPerPage(value) {
      this.itemsPerPage = value;
      this.showItems();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.showItems();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.showItems();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.showItems();
    }
  },
};
</script>

<style lang="scss">
  .partnership-history {
    width: 100%;
    background-color: $item-special-bg;
    border-radius: 8px;
    margin-top: 20px;
    @media (min-width: 2560px) {
      min-height: 700px;
    }
    &__wrap {      
      width: 100%;
      height: 100%; 
      @media (max-width: 900px) {
        overflow: auto;
      }
    }
    &__table {      
      @media (max-width: 900px) {
        width: 930px;
      }
    }
    &__subtitle {       
      font-weight: bold;
      font-size: 20px;
      white-space: nowrap;
      min-height: 65px;
      padding: 15px;
      border-bottom: 1px solid $dark-color;
      @media (min-width: 2560px) {
        min-height: 100px;  
      }
      @media (max-width: 1800px) {
        font-size: 18px;
      }
      @media (max-width: 1600px) {
        font-size: 16px;
        min-height: 50px;
      }
      @media (max-width: 1450px) {
        font-size: 14px;
      } 
    }
    &__item-title {
      background: $row;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      border-bottom: 1px solid $dark-color;
      @media (min-width: 2560px) {
        padding: 30px 15px;
      }      
      @media (max-width: 1280px) {
        padding: 10px;
      }
    }
    &__col {
      width: calc(100% / 5);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &__finance-img {
      width: 23px;
      margin-right: 5px;
    }
    &__dropdown-wrap {
      display: flex;
      align-items: center;
      gap: 15px;
      @media (max-width: 425px) {
        justify-content: space-between;
        width: 100%;
      }
    }
    &__dropdown {
      position: relative;
      display: inline-block;
      &:hover .partnership-history__dropdown-content {
        display: block;
      }
      &:hover .dropbtn {
        background-color: #999;
      }
    }
    &__dropbtn {
      background-color: $dark-color;
      padding: 10px 20px;
      border-radius: 20px;
      border: 1px solid $main-text;
      color: $main-text;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 14px;
      margin: 0;
      cursor: pointer;
      min-width: 80px;
      @media (max-width: 1280px) {
        font-size: 0.7rem;
      }
    }
    &__dropdown-content {
      display: none;
      position: absolute;
      background-color: $block-grey;
      color: $main-text;
      width: 100%;
      z-index: 444;
      border-radius: 8px;
      cursor: pointer;
      & a {
        color: $main-text;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
      }
      & a:hover {
        background-color: $circle;
      }
    }
    &__item-footer {
      display: flex;
      padding: 15px;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 425px) {
        flex-direction: column;
        gap: 10px;
      }
    }
    &__page-btn {
      background-color: $dark-color;
      border-radius: 50%;
      border: 1px solid $main-text;
      width: 34px;
      height: 34px;
      color: $main-text;
      &:hover:nth-child(1), &:hover:nth-child(3) {
        background-color: $green;
        cursor: pointer;
      }
      &:disabled:nth-child(1), &:disabled:nth-child(3) {
        background-color: $block-grey;
        cursor: not-allowed;
      }      
      @media (max-width: 1280px) {
        font-size: 0.7rem;
      }
    }    
    &__arrow {
      font-size: 20px;      
      @media (max-width: 1280px) {
        font-size: 14px;
      }
    }
    &__page-btns {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }  
</style>
  