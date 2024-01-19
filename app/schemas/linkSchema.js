import z from "zod";

const linkSchema = z.object({
  url: z.string({
    message: "Please provide a valid url",
  }),
});

export function validateLink(data) {
  return linkSchema.safeParse(data);
}
