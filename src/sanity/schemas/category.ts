import {defineField, defineType} from 'sanity'
export default defineType({
  name:'category', title:'Kategori', type:'document',
  fields:[
    defineField({name:'title', type:'string'}),
    defineField({name:'slug', type:'slug', options:{source:'title'}}),
    defineField({name:'icon', type:'string', description:'lucide icon name'}),
    defineField({name:'color', type:'string'}),
    defineField({name:'featured', type:'boolean'}),
  ]
})
