import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({ name: "aboutHeading", title: "About Section Heading", type: "string" }),
    defineField({ name: "aboutText", title: "About Section Text", type: "text" }),
  ],
});
