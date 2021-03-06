const {Alert,Confirm,Prompt,Box} = VueAlert;

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Prompt);
Vue.use(Box);

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      input:''
    }
  },
  methods:{
    fClick(){
      this.$alert({
        show:true,
        title:'提示',
        content:'alert弹框',
        okText:'确定',
        onOk:function(){
          console.log('ok');
        }
      });
      this.$confirm({
        show:true,
        title:'确认',
        content:'确定要发大财吗?',
        okText:'确定',
        onOk:function(){
          console.log('ok');
        },
        cancelText:'取消',
        onCancel:function(){
          console.log('cancel');
        }
      });
      Vue.prompt({
        show:true,
        title:'确认',
        content:'确定要发大财吗?',
        okText:'确定',
        input:'',
        onOk:function(){
          console.log('ok');
        },
        cancelText:'取消',
        onCancel:function(){
          console.log('cancel');
        }
      });
    }
  },
  components: {
    
  }
});

