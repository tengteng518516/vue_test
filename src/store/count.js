//求和的相关配置
export default {
    namespaced:true,
    actions: {
        jiaOdd(context,value) {
            console.log('actions jiaOdd')
            if (context.state.sum % 2) {
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value) {
            console.log('actions jiaWait')
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
        }
    },
    mutations: {
        JIA(state,value) {
            console.log('mutations JIA')
            state.sum+=value
        },
        JIAN(state,value) {
            console.log('mutations JIAN')
            state.sum-=value
        },
    },
    state: {
        sum: 0, //当前的和
        school: 'nnit',
        subject: 'Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum*10
        }
    },
}