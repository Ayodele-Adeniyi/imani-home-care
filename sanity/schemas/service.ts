import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Short Description", type: "text" }),
    defineField({ name: "fullDescription", title: "Full Description", type: "text" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
    defineField({
      name: "icon",
      title: "Icon Name (lucide-react)",
      type: "string",
      description: "e.g. UserCheck, Brain, Clock — must be a valid lucide-react icon name",
    }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
