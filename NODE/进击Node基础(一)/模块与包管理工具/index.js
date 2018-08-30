var klass = require('./klass')

// klass.add('SWAIN',['赵同学','李同学'])

/*
    多级
*/

exports.add=function(klasses){
    klasses.forEach(function(item,index){
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students)
    })
}