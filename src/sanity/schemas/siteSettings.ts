import {defineField, defineType} from 'sanity'
export default defineType({
  name:'siteSettings', title:'Pengaturan Situs', type:'document',
  fields:[
    defineField({name:'siteName', type:'string', title:'Nama Sekolah'}),
    defineField({name:'logo', type:'image'}),
    defineField({name:'phone', type:'string'}),
    defineField({name:'email', type:'string'}),
    defineField({name:'address', type:'text'}),
    defineField({name:'socials', type:'array', of:[{type:'object', fields:[{name:'platform', type:'string'},{name:'url', type:'url'}]}]}),
  ]
})
