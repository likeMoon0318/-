function getEnv(proxy_array){
   for(var i=0; i<proxy_array.length; i++){
       handler = '{\n' +
           'get : function(target,proper,receiver){\n' +
           'console.log("方法:","get","对象:",'+
           '"' + proxy_array[i] + '",' +
           '"属性:",proper,' +
           '"属性类型:", typeof proper,' +
           '"属性值类型:", typeof target[proper]);\n' +
           'return target[proper];\n' +
           '},\n' +
           'set : function(target,proper,value,receiver){\n' +
           'console.log("方法:","set","对象:",'+
           '"' + proxy_array[i] + '",' +
           '"属性:",proper,' +
           '"属性类型:", ' + 'typeof proper,' +
           '"属性值类型:", typeof target[proper]);\n' +
           'return Reflect.set(...arguments);\n' +
           '}\n' +
           '}'
       eval('try{\n' + proxy_array[i] + ';\n'
       + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ',' + handler + ')}catch(e){\n' + proxy_array[i] + '={};\n'
       + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ',' + handler + ')}')
   }
}
proxy_array = ['window','document','navigator','location','history','screen']
getEnv(proxy_array)