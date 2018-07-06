<template>
    <div class="loadingCover" v-show="visible">
        <div class="loading">
            <span class="loadingImg"></span>
        </div>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				visible: false,
            }
		},
		methods: {
			show(){
                this.visible = true;
            },
            hide(){
				this.visible = false;
            }
        },
		mounted() {

		}
	}
</script>
<style scoped>
    .loadingCover{
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 99;
    }
    .loading{
        width: 100px;
        height: 100px;
        background-color: rgba(0,0,0,0.7);
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .loadingImg{
        width: 40px;
        height: 40px;
        background-image: url("../assets/loading@2x.png");
        background-size: 100% 100%;
        animation: loading infinite linear 1s;
    }
    @keyframes loading {
        from{
            transform: rotateZ(0deg);
        }
        to{
            transform: rotateZ(360deg);
        }
    }
</style>