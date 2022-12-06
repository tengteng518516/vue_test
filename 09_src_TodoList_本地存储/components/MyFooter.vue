<template>
  <div class="todo-footer" v-show="total">
    <label>
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
        <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
        <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>

export default {
    name: 'MyFooter',
    props: ['todos','checkAllTodo','clearAllTodo'],
    computed: {
        total() {
          return this.todos.length
        },
        doneTotal() {
            //reduce方法执行次数等于数组长度，遍历数组，pre每一次调用方法的返回值，current数组元素
            return this.todos.reduce((pre, todo) => todo.done ? ++pre : pre,0)
        },
        isAll:{
            // return this.doneTotal===this.total && this.total>0
            get(){
                return this.doneTotal===this.total && this.total>0
            },
            set(value){
                this.checkAllTodo(value)
            }
        }
    },
    methods:{
        // checkAll(e){
        //     // if(this.isAll){
        //     //     this.todos.reduce((pre,todo)=>{todo.done=false},0)

        //     // }else{
        //     //     this.todos.reduce((pre,todo)=>{todo.done=true},0)
        //     // }
        //     console.log(e.target.checked)
        //     this.checkAllTodo(e.target.checked)
        // }

        clearAll(){
            this.clearAllTodo()
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer{
    height:40px;
    line-height:40px;
    padding-left:6px;
    margin-top:5px;
}

.todo-footer label{
    display:inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input{
    position:relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button{
    float:right;
    margin-top:5px;
}

</style>