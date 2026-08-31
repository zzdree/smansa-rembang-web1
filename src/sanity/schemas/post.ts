import {defineField, defineType} from 'sanity'
export default defineType({
  name:'post', title:'Berita', type:'document',
  fields:[
    defineField({name:'title', type:'string'}),
    defineField({name:'slug', type:'slug', options:{source:'title'}}),
    defineField({name:'cover', type:'image', options:{hotspot:true}}),
    defineField({name:'category', type:'string'}),
    defineField({name:'excerpt', type:'text'}),
    defineField({name:'body', type:'array', of:[{type:'block'}]}),
    defineField({name:'author', type:'string'}),
    defineField({name:'publishedAt', type:'datetime'}),
  ]
})
