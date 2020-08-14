<template>
    <div class="header-wrapper">
        <div class="inner-wrapper">
            <img src="./img/logo.png"/>
            <div class="left-side">
                <div @click="select(0)" :class="{'light-up':selected === 0}">{{$t('common.topBar.t1')}}</div>
                <div @click="select(1)" :class="{'light-up':selected === 1}">{{$t('common.topBar.t2')}}</div>
                <div @click="select(2)" class="margin-no" :class="{'light-up':selected === 2}">
                    {{$t('common.topBar.t3')}}
                </div>
            </div>
            <div class="right-side">
                <div @click="select(3)" :class="{'light-up':selected === 3}">{{$t('common.topBar.t4')}}</div>
                <div @click="select(4)" :class="{'light-up':selected === 4}">
                    {{$t('common.topBar.t5')}}
                </div>
                <div class="margin-no"><span @click="changeLang('zh')" :class="{'light-up':langSelected === 0}">中</span>
                    | <span
                            @click="changeLang('en')" :class="{'light-up':langSelected === 1}">EN</span> | <span
                            @click="changeLang('jp')" :class="{'light-up':langSelected === 2}">日本语</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-header',
        props: {
            selected: {
                type: Number,
                default: 0
            },
            langSelected: {
                type: Number,
                default: 0
            }
        },
        data() {

        },
        methods: {
            changeLang(lang){
                if (lang === 'zh') {
                    this.$i18n.locale = 'zh'
                    this.langSelected = 0
                } else if (lang === 'en') {
                    this.$i18n.locale = 'en'
                    this.langSelected = 1
                } else {
                    this.$i18n.locale = 'jp'
                    this.langSelected = 2
                }
            },
            select(num) {
                this.selected = num
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 86px;
        background-color: black;
        color: white;
        text-align: center;

        .inner-wrapper {
            position: relative;
            width: 1400px;
            height: 100%;
            display: inline-block;
            .light-up {
                color: red;
            }
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 115px;
                height: 49px;
                display: inline-block;
            }
            .left-side {
                height: 100%;
                line-height: 86px;
                float: left;
                text-align: left;
                display: inline-block;

                div {
                    margin-right: 70px;
                    display: inline-block;
                    cursor: pointer;
                    &.margin-no {
                        margin-right: 0;
                    }
                }

            }
            .right-side {
                height: 100%;
                line-height: 86px;
                float: right;
                text-align: right;
                display: inline-block;

                div {
                    margin-right: 70px;
                    display: inline-block;
                    cursor: pointer;
                    &.margin-no {
                        margin-right: 0;
                    }
                }
            }

        }
    }
</style>
