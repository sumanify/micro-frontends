import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => jwt.subscribe((jwt) => setLoggedIn(!!jwt)));

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
      >
        Add to Cart
      </button>
    </Show>
  );
};
