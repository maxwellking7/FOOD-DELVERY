import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: ' short Description',
      type: 'string',
    
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in GHC',
      type: 'number',
      
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
      
    })
  ]
})