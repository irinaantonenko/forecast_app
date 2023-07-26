<template>
    <div class="autorization-select">
        <p 
            class="autorization-select__title"
            @click="areOptionsVisible = !areOptionsVisible"
            >
            {{ selected }}
            <span class="icon-arrow_drop_down autorization-select__icon" @click="areOptionsVisible = !areOptionsVisible"></span>
        </p>
        <div 
            class="autorization-select__options"
            v-if="areOptionsVisible"
        >
            <p  
                class="autorization-select__options-item"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AutorizationSelect',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option);
                this.areOptionsVisible = false
            },
            hideSelect(event) {
                if (!this.$el.contains(event.target)) {
                    this.areOptionsVisible = false;
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeUnmount() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss">
    .autorization-select {
        position: relative;
        width: 100%;
        cursor: pointer;
        &__title {
            font-size: 16px;
            display: flex;
            width: 100%;
            height: 100%;
            border: 1px solid $dark-color;
            background-color: $dark-color;
            color: $main-text;
            border-radius: 0;
            padding: 10px 20px;
            border-radius: 30px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            box-sizing: border-box;
            height: 46px;
            position: relative;
            &:hover {
                border: 1px solid $green;
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 174, 0.6);
            }
        }
        &__icon {
            font-size: 28px;
            color: #666;
            position: absolute;
            top: 10px;
            right: 5px;
        }
        &__options-item {
            margin: 0;            
            padding-left: 7px;
            font-size: 16px;
            line-height: 30px;
            color: $main-text;            
            background-color: $authorization-block;
            &:hover {
                background-color: $dark-color;
            }
        }
        &__options {
            border: 1px solid $green;
            border-radius: 5px;
            position: absolute;
            top: 33px;
            right: 0;
            width: 100%;
            border-radius: 5px;
            height: 200px;
            overflow: auto;
            z-index: 28;
            &::-webkit-scrollbar {
                width: 5px; 
            }
            &::-webkit-scrollbar-track {
                background-color: darken($main-text, 70%);
                border-radius: 6px;
            }
            
            &::-webkit-scrollbar-thumb {
                background-color: $main-text;
                border-radius: 5px;
            }
            
            &::-webkit-scrollbar-thumb:hover {
                background-color: darken($main-text, 10%);
            }      
        }
    }
</style>