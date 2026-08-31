import {defineField, defineType} from 'sanity'
export default defineType({
  name:'faq', title:'FAQ', type:'document',
  fields:[
    defineField({name:'question', type:'string'}),
    defineField({name:'answer', type:'text'}),
    defineField({name:'order', type:'number'}),
  ]
})
