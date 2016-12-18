import { setStores } from '../app/stores/stores.jsx';

export default async(ctx, next) => {
  const state = {
    common: {
      hostname: ctx.headers.host
    }
  }

  ctx.stores = setStores(state)
  await next()
}
