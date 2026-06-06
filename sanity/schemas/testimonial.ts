import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "role", title: "Role (e.g. Daughter of a client)", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "rating", title: "Star Rating (1–5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
