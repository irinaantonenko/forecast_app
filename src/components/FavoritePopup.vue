<template>
    <div class="favorite-popup__wrapper" ref="popup_wrapper">
        <div class="favorite-popup">        
            <div class="favorite-popup__header">
                <span>{{popupTitle}}</span>
                <span>
                    <i 
                        class="material-icons favorite-popup__icon"
                        @click="hideModal">
                        close
                    </i>
                </span>
            </div>
            <div class="favorite-popup__content">              
                It is no longer possible to add to the favorites list. First, remove at least one city.
            </div>
            <div class="favorite-popup__footer">
                <button 
                    class="btn favorite-popup__close"
                    @click="hideModal">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script> 
    import { mapActions } from 'vuex';
    export default {   
        name: 'FavoritePopup',
        props: {
            popupTitle: {
                type: String,
                default: 'Error'
            }
        },
        methods: {
            ...mapActions(['HIDE_MODAL']),
            hideModal() {
                this.$store.commit('HIDE_MODAL');
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['popup_wrapper']) {
                    vm.hideModal()
                }
            })
        }       
    }
</script>

<style lang="scss">
   .favorite-popup {
        padding: 16px;
        position: fixed;
        top: 250px;
        width: 400px;
        box-shadow: 0 0 16px 0 $color-main;
        left: calc(50% - 200px);
        z-index: 333;
        background-color: $header-background;
        gap: 20px;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
            width: 300px;
            left: calc(50% - 166px);
        }
        @media (max-width: 550px) {
            width: 260px;
            left: calc(50% - 146px);
        }
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $hover-background;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 433;
            max-height: 100%;
        }
        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            text-align: center;
        }
        &__footer{
            justify-content: center;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__icon {
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
        &__btn {
            padding: 8px;
            color: $color-main;
            background-color: $hover;
        }
        &__close.btn {
            padding: 8px;
            color: $color-main;
            background-color: $hover;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
   }
</style>