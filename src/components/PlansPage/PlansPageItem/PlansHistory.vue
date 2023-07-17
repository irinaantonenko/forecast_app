<template>
  <div class="plans-history">
    <h3 class="plans-history__subtitle">История</h3>
    <div class="plans-history__wrap">
      <div class="plans-history__table">
        <div class="plans-history__item-title">
          <p class="plans-history__text plans-history__col">Дата начала</p>
          <p class="plans-history__text plans-history__col">Дата окончания</p>
          <p class="plans-history__text plans-history__col">Старт. капитал</p>
          <p class="plans-history__text plans-history__col">Добавл. капитал</p>
          <p class="plans-history__text plans-history__col">Фин. результат в %</p>
          <p class="plans-history__text plans-history__col">Прибыль в USDT</p>
          <p class="plans-history__text plans-history__col">Статус плана</p>
        </div>
        <div class="plans-history__item" v-for="(item, index) in displayedItems" :key="index">
          <p class="plans-history__text plans-history__col">{{ item.startdate }}</p>
          <p class="plans-history__text plans-history__col">{{ item.enddate }}</p>
          <p class="plans-history__text plans-history__col">{{ item.startcapital }}</p>
          <p class="plans-history__text plans-history__col">{{ item.addedcapital }}</p>
          <p class="plans-history__text plans-history__col">{{ item.finresult }}</p>
          <p class="plans-history__text plans-history__col">{{ item.profit }}</p>
          <p class="plans-history__text plans-history__col">{{ item.status }}<span :class="getStatusClass(item.status)" class="plans-history__status"></span></p>
        </div>
      </div>
    </div>
    <div class="plans-history__item-footer">
      <div class="plans-history__dropdown-wrap">
        <div class="plans-history__dropdown">
          <button class="plans-history__dropbtn">{{ itemsPerPage }} <span class="icon-arrow_drop_down1"></span></button>
          <div class="plans-history__dropdown-content">
            <a @click="updateItemsPerPage(5)">5</a>
            <a @click="updateItemsPerPage(10)">10</a>
            <a @click="updateItemsPerPage(15)">15</a>
          </div>          
        </div>
        <div v-if="displayedItems.length > 0">Показано {{ endItemIndex }} из {{ items.length }}</div>
      </div>
      <div class="plans-history__page-btns">
        <button class="plans-history__page-btn" @click="previousPage" :disabled="currentPage === 1"><span class="plans-history__arrow icon-keyboard_arrow_left"></span></button> 
        <button class="plans-history__page-btn" @click="goToPage(currentPage)" :class="{ active: true }">{{ currentPage }}</button>
        <button class="plans-history__page-btn" @click="nextPage" :disabled="currentPage === totalPages"><span class="plans-history__arrow icon-keyboard_arrow_right"></span></button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'PlansHistory',
  data() {
    return {
      items: [
        { id: 13343434, startdate: '2023.05.28', enddate: '2023.12.30', startcapital: 300.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.27', enddate: '2023.12.30', startcapital: 200.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'В обработке'},
        { id: 13343434, startdate: '2023.05.26', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Отклонено'},
        { id: 13343434, startdate: '2023.05.25', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'В обработке'},
        { id: 13343434, startdate: '2023.05.23', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.23', enddate: '2023.12.30', startcapital: 600.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.23', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'В обработке'},
        { id: 13343434, startdate: '2023.05.23', enddate: '2023.12.30', startcapital: 700.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.19', enddate: '2023.12.30', startcapital: 200.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.18', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'В обработке'},
        { id: 13343434, startdate: '2023.05.17', enddate: '2023.12.30', startcapital: 300.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Отклонено'},
        { id: 13343434, startdate: '2023.05.15', enddate: '2023.12.30', startcapital: 800.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.13', enddate: '2023.12.30', startcapital: 900.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Отклонено'},
        { id: 13343434, startdate: '2023.05.11', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
        { id: 13343434, startdate: '2023.05.10', enddate: '2023.12.30', startcapital: 400.00, addedcapital: 30.00, finresult: 60, profit: 600, status: 'Завершен'},
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
        return 'plans-history__status-green';
      } else if (status === 'В обработке') {
        return 'plans-history__status-orange';
      } else if (status === 'Отклонено') {
        return 'plans-history__status-red';
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
  .plans-history {
    width: 100%;
    background-color: $item-special-bg;
    border-radius: 8px;
    margin-top: 40px;
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
      &:hover .plans-history__dropdown-content {
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
      right: 5%;
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
  