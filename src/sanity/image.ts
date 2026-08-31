import imageUrlBuilder from '@sanity/image-url'
import {client} from './client'
const builder = imageUrlBuilder(client)
export function urlFor(source:any){ return source ? (builder as any).image(source) : null }
export function sanityImg(source:any, w=600){ try{ return source ? (urlFor(source) as any)?.width(w).url() : null } catch{ return null } }
