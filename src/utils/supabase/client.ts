// Stub: no Supabase client in chispito-indigena
// Auth features are handled by chispito.mx only

const noop = () => { };
const noopPromise = () => Promise.resolve({ data: { session: null }, error: null });

export function createClient() {
    return {
        auth: {
            getSession: noopPromise,
            getUser: () => Promise.resolve({ data: { user: null }, error: null }),
            signOut: noopPromise,
            onAuthStateChange: (_event: unknown, _cb: unknown) => ({
                data: { subscription: { unsubscribe: noop } },
            }),
        },
    } as any;
}
