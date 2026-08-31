import {defineField, defineType} from 'sanity'
export default defineType({
  name:'course', title:'Program Unggulan', type:'document',
  fields:[
    defineField({name:'title', type:'string'}),
    defineField({name:'slug', type:'slug', options:{source:'title'}}),
    defineField({name:'thumbnail', type:'image', options:{hotspot:true}}),
    defineField({name:'rating', type:'number'}),
    defineField({name:'duration', type:'string'}),
    defineField({name:'students', type:'number'}),
    defineField({name:'price', type:'string'}),
    defineField({name:'category', type:'reference', to:[{type:'category'}]}),
    defineField({name:'instructor', type:'reference', to:[{type:'teacher'}]}),
  ]
})
