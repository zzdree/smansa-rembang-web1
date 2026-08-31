import {defineField, defineType} from 'sanity'
export default defineType({
  name:'hero', title:'Hero', type:'document',
  fields:[
    defineField({name:'tag', type:'string', title:'Tag'}),
    defineField({name:'headline', type:'string', title:'Headline'}),
    defineField({name:'subheadline', type:'text', title:'Subheadline'}),
    defineField({name:'ctaPrimaryLabel', type:'string', title:'CTA Primary Label'}),
    defineField({name:'ctaPrimaryHref', type:'string', title:'CTA Primary Href'}),
    defineField({name:'image', type:'image', title:'Image', options:{hotspot:true}}),
  ]
})
