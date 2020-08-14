<template>
    <div class="footer-wrapper">
        <div class="inner-wrapper">
            <img src="./img/line.jpg"/>
            <div class="bank-info">
                <p>
                    <span class="bank-info-title">{{$t('common.footer.bki1-1')}}</span>
                    <span class="bank-info-sub">{{$t('common.footer.bki1-2')}}</span>
                </p>
                <p>
                    <span class="bank-info-title">{{$t('common.footer.bki2-1')}}</span>
                    <span class="bank-info-sub">{{$t('common.footer.bki2-2')}}</span>
                </p>
                <p>
                    <span class="bank-info-title">{{$t('common.footer.bki3-1')}}</span>
                    <span class="bank-info-sub">{{$t('common.footer.bki3-2')}}</span>
                </p>
            </div>
            <img class="qr-code-2" src="./img/qrcode-2.jpg"/>
            <img class="qr-code-1" src="./img/qrcode-1.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-footer',
        props: {},
        data() {

        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
    .footer-wrapper {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 220px;
        background-color: #363533;
        color: white;
        text-align: center;

        .inner-wrapper {
            display: inline-block;
            width: 1140px;
            height: 100%;
            text-align: left;
            overflow: hidden;
            img {

            }
            .bank-info {
                margin-top: 30px;
                display: inline-block;
                width: 485px;
                margin-left: 65px;
                font-size: 12px;
                vertical-align: top;
                line-height: 32px;
                .bank-info-title {

                }
                .bank-info-sub {
                    color: #969696;
                    word-wrap: break-word;
                    word-break: break-all;
                }
            }
            .qr-code-1 {
                float:right;
                width: 125px;
                height: 125px;
                margin-top: 22px;
            }
            .qr-code-2 {
                float:right;
                margin-top: 22px;
                margin-left: 30px;
                width: 125px;
                height: 125px;
            }
        }
    }
</style>
