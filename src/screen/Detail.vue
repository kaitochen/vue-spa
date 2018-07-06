<template>
    <div style="background-color: #fff">
        <swiper class="swiper" v-if="picList.length" :options="swiperOption">
            <swiper-slide v-for="(item,index) in picList" :key="index" :data-type="item">
                <div class="item" :style="{backgroundImage: 'url('+item+')'}"></div>
            </swiper-slide>
            <div class="pagination" slot="pagination"></div>
        </swiper>
    </div>


</template>
<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'

	export default{
    	components: {
    	    swiper,
            swiperSlide,
        },
		data() {
			return {
				swiperOption: {
					notNextTick: true,
                    autoplay: {
						stopOnLastSilde: false,
                        delay: 1000,
                    },
                    pagination: {
						el: '.pagination'
                    },
                    loop: true,
                },
                data: [],
                picList: [],
                checkActive: true,
                syllabusData: [],
                teacherData: {},
                codeVisible: false
            }
		},
		methods: {
			back(){
				this.$router.back();
            },
        },
		activated() {
            window.scrollTo(0,0)
		},
		deactivated(){
        }

	}
</script>
<style scoped>
    .swiper{
        width: 100%;
        height: 200px;
    }
    .item{
        width: 100%;
        height: 100%;
        /*background-color: #999;*/
        background-size: 100% 100%;
    }
    .pagination{
        position: absolute;
        top: 180px;
        right: 20px;
        z-index: 10;
    }

</style>