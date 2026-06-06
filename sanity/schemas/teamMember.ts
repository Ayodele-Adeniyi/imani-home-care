import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "role", title: "Job Title", type: "string" }),
    defineField({ name: "bio", title: "Biography", type: "text" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
