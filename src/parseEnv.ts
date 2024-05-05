import {z} from 'zod';

const schema = z.object({  //que es lo necesario
    NEXT_PUBLIC_API_URL: z.string(),
    NEXT_PUBLIC_API_KEY: z.string(),
})

export const parseEnv = schema.parse(process.env); //verifcar que sea lo correcto