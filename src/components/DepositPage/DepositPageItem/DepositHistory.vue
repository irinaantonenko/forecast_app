<template>
  <div class="deposit-history">
    <h3 class="deposit-history__subtitle">История</h3>
    <div class="deposit-history__wrap">
      <div class="deposit-history__table">
        <div class="deposit-history__item-title">
          <p class="deposit-history__text deposit-history__col">Дата депозита</p>
          <p class="deposit-history__text deposit-history__col">Способ оплаты</p>
          <p class="deposit-history__text deposit-history__col">Сумма депозита</p>
          <p class="deposit-history__text deposit-history__col">Статус транзакции</p>
          <p class="deposit-history__text deposit-history__col">ID транзакции</p>
        </div>
        <div class="deposit-history__item" v-for="(item, index) in displayedItems" :key="index">
          <p class="deposit-history__text deposit-history__col">{{ item.date }}</p>
          <p class="deposit-history__text deposit-history__col"><img class="deposit-history__finance-img" src="../../../assets/images/tether.png" alt="ustd">Tether</p>
          <p class="deposit-history__text deposit-history__col">{{ item.money }}</p>
          <p class="deposit-history__text deposit-history__col">{{ item.status }}<span :class="getStatusClass(item.status)" class="deposit-history__status"></span></p>
          <p class="deposit-history__text deposit-history__col">{{ item.id }}</p>
        </div>
      </div>
    </div>
    <div class="deposit-history__item-footer">
      <div class="deposit-history__dropdown-wrap">
        <div class="deposit-history__dropdown">
          <button class="deposit-history__dropbtn">{{ itemsPerPage }} <span class="icon-arrow_drop_down1"></span></button>
          <div class="deposit-history__dropdown-content">
            <a @click="updateItemsPerPage(5)">5</a>
            <a @click="updateItemsPerPage(10)">10</a>
            <a @click="updateItemsPerPage(15)">15</a>
          </div>          
        </div>
        <div v-if="displayedItems.length > 0">Показано {{ endItemIndex }} из {{ items.length }}</div>
      </div>
      <div class="deposit-history__page-btns">
        <button class="deposit-history__page-btn" @click="previousPage" :disabled="currentPage === 1"><span class="deposit-history__arrow icon-keyboard_arrow_left"></span></button> 
        <button class="deposit-history__page-btn" @click="goToPage(currentPage)" :class="{ active: true }">{{ currentPage }}</button>
        <button class="deposit-history__page-btn" @click="nextPage" :disabled="currentPage === totalPages"><span class="deposit-history__arrow icon-keyboard_arrow_right"></span></button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        { id: 13343434, date: '2023.05.28', money: 300.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.27', money: 200.00, status: 'В обработке'},
        { id: 13343434, date: '2023.05.26', money: 400.00, status: 'Отклонено'},
        { id: 13343434, date: '2023.05.25', money: 400.00, status: 'В обработке'},
        { id: 13343434, date: '2023.05.23', money: 400.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.23', money: 600.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.23', money: 400.00, status: 'В обработке'},
        { id: 13343434, date: '2023.05.23', money: 700.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.19', money: 200.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.18', money: 400.00, status: 'В обработке'},
        { id: 13343434, date: '2023.05.17', money: 300.00, status: 'Отклонено'},
        { id: 13343434, date: '2023.05.15', money: 800.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.13', money: 900.00, status: 'Отклонено'},
        { id: 13343434, date: '2023.05.11', money: 400.00, status: 'Завершен'},
        { id: 13343434, date: '2023.05.10', money: 400.00, status: 'Завершен'},
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
    },
    getStatusClass(status) {
      if (status === 'Завершен') {
        return 'deposit-history__status-green';
      } else if (status === 'В обработке') {
        return 'deposit-history__status-orange';
      } else if (status === 'Отклонено') {
        return 'deposit-history__status-red';
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
  .deposit-history {
    width: 100%;
    background-color: $item-special-bg;
    border-radius: 8px;
    @media (min-width: 2560px) {
      min-height: 700px;
    }
    &__wrap {  
      @media (max-width: 700px) {
        overflow: auto;
      }
    }
    &__table {      
      @media (max-width: 700px) {
        width: 770px;
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
      &:hover .deposit-history__dropdown-content {
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
    &__status {
      display: inline-block;
      width: 14px;  
      height: 14px;
      border-radius: 50%;
      position: absolute;
      right: 10%;
      @media (max-width: 1024px) {
        right: 5%;
      }
    }
    &__status-green {
      background-color: $active;
    }
    &__status-orange {
      background-color: $pending;
    }
    &__status-red {
      background-color: $inactive;
    }
  }  
</style>
  