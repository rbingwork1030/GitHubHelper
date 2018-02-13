
var apiUrl="https://api.github.com/repos/MonospaceTW/goodfood/commits?per_page=10&sha=";
var demo=new Vue({
    el: '#demo',
    data: {
        selected: 'master',
        options: [
          { text: '主線', value: 'master' },
          { text: '分支', value: 'develope' },
          { text: '湯瑪士', value: 'tomas' },
          { text: '阿陰', value: 'Ryin ' },
          { text: 'clover', value: 'clover ' }

          
          
        ],
        commits: null
    },
   
    methods:{
        fetchData:function(event){
            alert('Hello ' + this.selected + '!')
            alert(event.target.tagName)
            var xhr = new XMLHttpRequest()
            var self = this
            //設定請求
            xhr.open('GET',apiUrl+self.selected)

           // 使用 非同步，需監聽 load 事件，
            xhr.onload = function(){
                self.commits= JSON.parse(xhr.responseText)
                console.log(self.commits[0].html_url)
            }
            //發送請求
            xhr.send(null)
        },
        
    }
  })