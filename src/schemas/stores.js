import zod from 'zod';

const storeSchema = zod.object({
    name: zod.string({
        invalid_type_error: 'Nombre es un String',
        required_error: 'Nombre es requerido'
    }),
    address: zod.string({
        invalid_type_error: 'Nombre es un String',
        required_error: 'Nombre es requerido'
    }),
    isActive: zod.boolean().optional().default(true),
    city: zod.string({
        invalid_type_error: 'Ciudad es un String',
        required_error: 'Ciudad es requerido'
    })
});

export function validateStore(object) {
    return storeSchema.safeParse(object);
};