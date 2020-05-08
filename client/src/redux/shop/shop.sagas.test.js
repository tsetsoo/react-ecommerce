import { takeLatest } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import { fetchCollectionsAsync, fetchCollectionsStart } from "./shop.sagas";

it("testing fetchCollectionsStart", () => {
  const gen = fetchCollectionsStart();
  expect(gen.next().value).toEqual(
    takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
  );
});
