import {defineField, defineType} from 'sanity'
export default defineType({
  name:'testimonial', title:'Testimoni', type:'document',
  fields:[
    defineField({name:'name', type:'string'}),
    defineField({name:'role', type:'string'}),
    defineField({name:'avatar', type:'image', options:{hotspot:true}}),
    defineField({name:'rating', type:'number'}),
    defineField({name:'quote', type:'text'}),
  ]
})
