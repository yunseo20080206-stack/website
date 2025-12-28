import { z, defineCollection } from 'astro:content';

// ============================================================
// PROJECTS COLLECTION SCHEMA
// This defines the structure for your project Markdown files.
// Each .md file in src/content/projects/ must have this frontmatter.
// ============================================================

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        // Required fields
        title: z.string(),
        description: z.string(),
        date: z.string(),

        // Tags for filtering (e.g., "Engineering", "Business", "STEM", "Leadership")
        tags: z.array(z.string()),

        // Your role in the project
        role: z.string(),

        // Tools/technologies used
        tools: z.array(z.string()),

        // Thumbnail image path (relative to /public/)
        thumbnail: z.string().optional(),

        // External links (optional)
        links: z.object({
            demo: z.string().optional(),
            github: z.string().optional(),
            document: z.string().optional(),
        }).optional(),

        // Featured on homepage?
        featured: z.boolean().default(false),

        // Draft status (won't be published if true)
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    projects: projectsCollection,
};
