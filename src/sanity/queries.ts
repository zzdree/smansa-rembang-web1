export const qCourses = `*[_type=="course"]|order(_createdAt desc){ title, rating, duration, students, price, "category": category->title, "instructor": instructor->name, "image": thumbnail, "avatar": instructor->photo }`
export const qPosts = `*[_type=="post"]|order(publishedAt desc)[0...3]{ title, "cat": category, "date": publishedAt, author, "image": cover, excerpt }`
export const qTeachers = `*[_type=="teacher"]|order(_createdAt asc){ name, role, "image": photo }`
export const qTestimonials = `*[_type=="testimonial"]|order(_createdAt asc){ name, role, quote, rating, "avatar": avatar }`
export const qFaqs = `*[_type=="faq"]|order(order asc){ "q": question, "a": answer }`
export const qCategories = `*[_type=="category"]|order(title asc){ title, "desc": title, icon, color, featured }`
