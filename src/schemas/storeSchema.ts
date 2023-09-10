const { z } = require('zod')

exports.getStoreSchema = z
    .object({
        amount: z.string({
            required_error: 'O parâmetro images deve ser um número',
            invalid_type_error: 'Parâmetro images está incorreto, é esperado um número',
        }),
        images: z.union([z.literal('true'), z.literal('false')], {
            errorMap: () => ({ message: 'Parâmetro images está incorreto, é esperado um boolean' }),
        }),
        description: z.union([z.literal('true'), z.literal('false')], {
            errorMap: () => ({ message: 'Parâmetro description está incorreto, é esperado um boolean' }),
        }),
        name: z.union([z.literal('true'), z.literal('false')], {
            errorMap: () => ({ message: 'Parâmetro name está incorreto, é esperado um boolean' }),
        }),
        price: z.union([z.literal('true'), z.literal('false')], {
            errorMap: () => ({ message: 'Parâmetro price está incorreto, é esperado um boolean' }),
        }),
        rating: z.union([z.literal('true'), z.literal('false')], {
            errorMap: () => ({ message: 'Parâmetro rating está incorreto, é esperado um boolean' }),
        }),
    })
    .strict()
