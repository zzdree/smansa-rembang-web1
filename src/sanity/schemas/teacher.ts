import {defineField, defineType} from 'sanity'
export default defineType({
  name:'teacher', title:'Guru', type:'document',
  fields:[
    defineField({name:'name', type:'string'}),
    defineField({name:'slug', type:'slug', options:{source:'name'}}),
    defineField({name:'role', type:'string'}),
    defineField({name:'photo', type:'image', options:{hotspot:true}}),
    defineField({name:'bio', type:'text'}),
  ]
})
